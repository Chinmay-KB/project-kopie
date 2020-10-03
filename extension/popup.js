var minSize = 200;
var maxSize = 600 - 70; // Crome appears to not want to let the popup grow beyond 600px, also removing a bit because of input and bottom text
var minLength = 0;
var maxLength = 1270; // qrcode generator appears to crash when using strings longer than 1270

var qrContainer = $("#qrcodeContainer");
qrContainer.html(generateQrDiv(minSize));

function generateQrDiv(size) {
    return '<div id="qrcode" style="width:' + size + 'px; height:' + size + 'px; margin-top:15px;"></div>';
}

var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: minSize,
    height: minSize
});

function fitSize(textLength) {
    return Math.round(
        ((maxSize - minSize) * (textLength - minLength)) / (maxLength - minLength) +
        minSize
    );
}

function makeCode() {
    var elText = document.getElementById("text");
    qrcode.makeCode("Paste Something!")
    elText.addEventListener('input', function(evt) {
        if (elText.value != null || elText.value != "") {
            if (elText.value.length <= maxLength) {
                var newSize = fitSize(elText.value.length);
                qrContainer.html(generateQrDiv(newSize));
                qrcode = new QRCode(document.getElementById("qrcode"), {
                    width: newSize,
                    height: newSize
                })
                qrcode.makeCode(elText.value);
                $('#qrcode').css({width: newSize + 'px', height: newSize + 'px'})
            }
            else qrcode.makeCode("Text is too long")
        } else qrcode.makeCode("Text is to short");

    })

    navigator.clipboard.readText().then(text => {
        if (text != null && text.trim() !== '') {
            elText.value = text;
        }
    });

}
makeCode();

$("#text").
on("blur", function() {
    makeCode();
}).
on("keydown", function(e) {
    if (e.keyCode == 13) {
        makeCode();
    }
});
