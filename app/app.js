const Regex = /^[a-z\s]+$/;

var txt_msg = document.getElementById("txt-criptography");

var encrypt_txt = document.getElementById("txt-descriptography");
var box_descritography = document.getElementById("box-descritography");
var msg_figure = document.getElementById("msg-figure");

var btn_encrypt = document.getElementById("btn-criptography");
var btn_decrypt = document.getElementById("btn-descriptography");
var btn_copy = document.getElementById("btn-copy");
var texto = "mensagem";

function toasty() {
    Toastify({
        text: "A mensagem está fora do padrão aceito.",
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: " #ff0000",
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
        clean_decrypt();
        toasty();
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
    if (get_msg !== "") {
        var decrypt_msg = get_msg
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u")
        .replaceAll("ober", "o");
    return encrypt_txt.value = decrypt_msg;
    // alert(decrypt_msg);
    } else {
        toasty();
         
    }
}

// Chama a função de descriptografia e limpa o campo de mensagem
function clean_decrypt() {
    decrypt();  
    box_descritography.classList.remove("d-none")
    msg_figure.classList.add("d-none")
}
btn_decrypt.onclick = clean_decrypt;

function copyMsg() {
    encrypt_txt.focus();
    encrypt_txt.select();
    document.execCommand('copy');
    encrypt_txt.value = "";
    box_descritography.classList.add("d-none")
    msg_figure.classList.remove("d-none")
}
btn_copy.onclick = copyMsg;
