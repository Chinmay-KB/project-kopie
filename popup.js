var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 200,
    height: 200
});

function makeCode() {
    var elText = document.getElementById("text");

    elText.addEventListener('input', function(evt) {
        if (elText.value != null || elText.value != "") {
            if (elText.value.length <= 500)
                qrcode.makeCode(elText.value);
            else qrcode.makeCode("Text too big")
        } else qrcode.makeCode("Text too small");

    })

    // if (!elText.value) {
    //     elText.focus();
    //     return;
    // }

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