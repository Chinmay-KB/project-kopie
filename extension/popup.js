var minSize = 200;
var maxSize = 530; // the popup cannot be taller than 600px
var maxBytes = 2328; // the most the generator fits at correction level M, in UTF-8 bytes

var elText = document.getElementById("text");
var elQr = document.getElementById("qrcode");
var elMessage = document.getElementById("message");
var elCount = document.getElementById("count");

function byteLength(text) {
    return new TextEncoder().encode(text).length;
}

function fitSize(bytes) {
    return Math.round(((maxSize - minSize) * bytes) / maxBytes + minSize);
}

function showMessage(message) {
    elQr.style.display = "none";
    elMessage.textContent = message;
    elMessage.style.display = "flex";
}

function draw(text, size) {
    elQr.innerHTML = "";
    elQr.removeAttribute("title");
    elQr.style.width = size + "px";
    elQr.style.height = size + "px";
    return new QRCode(elQr, {
        text: text,
        width: size,
        height: size,
        correctLevel: QRCode.CorrectLevel.M
    });
}

function showQr(text, size) {
    elMessage.style.display = "none";
    elQr.style.display = "block";

    // The number of modules is only known once the code is made. Redraw at a
    // whole number of pixels per module, otherwise big codes come out blurry
    // and do not scan.
    var modules = draw(text, size)._oQRCode.getModuleCount();
    var snapped = modules * Math.max(3, Math.round(size / modules));
    if (snapped !== size) {
        draw(text, snapped);
    }
}

function render() {
    var text = elText.value;
    var bytes = byteLength(text);
    elCount.textContent = bytes + " / " + maxBytes;
    elCount.className = bytes > maxBytes ? "over" : "";

    if (text === "") {
        showMessage("Paste or type some text to get a QR code.");
        return;
    }

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
