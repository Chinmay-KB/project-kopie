var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 200,
    height: 200
});

function makeCode() {
    var elText = document.getElementById("text");
    qrcode.makeCode("Paste Something!")
    elText.addEventListener('input', function(evt) {
        if (elText.value != null || elText.value != "") {
            if (elText.value.length <= 500)
                qrcode.makeCode(elText.value);
            else qrcode.makeCode("Text too big")
        } else qrcode.makeCode("Text too small");

    })


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