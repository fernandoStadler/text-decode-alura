const Regex = /^[a-z\s]+$/;

var txt_msg = document.getElementById("txt-criptography");

var encrypt_txt = document.getElementById("txt-descriptography");
var box_descritography = document.getElementById("item-2");
var msg_figure = document.getElementById("msg-figure");

var btn_encrypt = document.getElementById("btn-criptography");
var btn_decrypt = document.getElementById("btn-descriptography");
var btn_copy = document.getElementById("btn-copy");

function toasty(msg,gravity,bg,position) {

        box_descritography.classList.add("d-none")
        msg_figure.classList.remove("d-none")

    Toastify({
        text: msg,
        duration: 6000,
        newWindow: true,
        close: true,
        gravity: gravity, // `top` or `bottom`
        position: position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bg,
            fontSize: "20px",
            fontWeight: "bold"
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
// Função para criar a criptografia
function encrypt() {
    var get_msg = txt_msg.value;
    if (Regex.test(get_msg) == true) {
        var encrypt_msg = get_msg
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("u", "ufat")
            .replaceAll("o", "ober");
        return encrypt_txt.value = encrypt_msg;
    } else {
        toasty("A mensagem está fora do padrão aceito, por favor revise o texto","top","#842029","center");
    }
}

// Chama a função de criptografia e limpa o campo de mensagem
function clean_encrypt() {
    msg_figure.classList.add("d-none")
    box_descritography.classList.remove("d-none")
    encrypt();

    txt_msg.value = ""
}
btn_encrypt.onclick = clean_encrypt

// Função para criar a descriptografia
function decrypt() {
    var get_msg = txt_msg.value;
    if (Regex.test(get_msg) == true) {
        var decrypt_msg = get_msg
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ufat", "u")
            .replaceAll("ober", "o");
        return encrypt_txt.value = decrypt_msg;
        // alert(decrypt_msg);
    } else {
        toasty("A mensagem está fora do padrão aceito, por favor revise o texto","top","#842029","center");
    }
}
// Chama a função de descriptografia e limpa o campo de mensagem
function clean_decrypt() {
    box_descritography.classList.remove("d-none")
    msg_figure.classList.add("d-none")
    decrypt();

    txt_msg.value = ""
    
}
btn_decrypt.onclick = clean_decrypt;

function copyMsg() {
    encrypt_txt.focus();
    encrypt_txt.select();
    document.execCommand('copy');
    encrypt_txt.value = "";
    box_descritography.classList.add("d-none")
    msg_figure.classList.remove("d-none")
    toasty("Mensagem copiada com sucesso!","top","#00b285","center");
}
btn_copy.onclick = copyMsg;