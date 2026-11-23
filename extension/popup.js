var minSize = 200;
var maxSize = 600 - 70; // Chrome does not let the popup grow beyond 600px, also removing a bit because of input and bottom text
var maxBytes = 1270; // the most the qrcode generator can fit, measured in UTF-8 bytes

var elText = document.getElementById("text");
var elQr = document.getElementById("qrcode");
var elMessage = document.getElementById("message");

function byteLength(text) {
    return new TextEncoder().encode(text).length;
}

function fitSize(bytes) {
    return Math.round(((maxSize - minSize) * bytes) / maxBytes + minSize);
}

function showMessage(message) {
    elQr.style.display = "none";
    elMessage.textContent = message;
    elMessage.style.display = "block";
}

function draw(text, size) {
    elQr.innerHTML = "";
    elQr.removeAttribute("title");
    elQr.style.width = size + "px";
    elQr.style.height = size + "px";
    return new QRCode(elQr, {
        text: text,
        width: size,
        height: size
    });
}

function showQr(text, size) {
    elMessage.style.display = "none";
    elQr.style.display = "block";

    // The number of modules is only known once the code is made. Redraw at a
    // whole number of pixels per module, otherwise big codes come out blurry
    // and do not scan.
    var modules = draw(text, size)._oQRCode.getModuleCount();
    var snapped = modules * Math.max(1, Math.round(size / modules));
    if (snapped !== size) {
        draw(text, snapped);
    }
}

function render() {
    var text = elText.value;
    if (text === "") {
        showMessage("Paste or type some text to get a QR code.");
        return;
    }

    var bytes = byteLength(text);
    if (bytes > maxBytes) {
        showMessage("Too long for a QR code. This is " + bytes + " bytes, the limit is " + maxBytes + ".");
        return;
    }

    try {
        showQr(text, fitSize(bytes));
    } catch (e) {
        showMessage("Could not make a QR code for this text.");
    }
}

elText.addEventListener("input", render);
render();

// Start with whatever is on the clipboard, unless the user is already typing.
navigator.clipboard.readText().then(function(text) {
    if (elText.value === "" && text != null && text.trim() !== "") {
        elText.value = text;
        render();
    }
}).catch(function() {
    // No clipboard access. The input is focused, so pasting by hand still works.
});
