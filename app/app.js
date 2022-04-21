

const Regex = /^[a-z\s]+$/;
var txt_msg = document.getElementById("txt_msg");
var encrypt_txt = document.getElementById("encrypt_txt");
var btn_encrypt = document.getElementById("btn_encrypt");
var btn_decrypt = document.getElementById("btn_decrypt");
var btn_copy = document.getElementById("btn_copy");

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
        return encrypt_txt.innerHTML = encrypt_msg;
    } else {
        alert("Digite uma mensagem")
    }
}

function teste(){
    alert(encrypt_txt.innerHTML)
}

btn_encrypt.onclick = encrypt;

// Função para criar a descriptografia
function decrypt() {
    var get_msg = encrypt_txt.innerHTML;
    if (Regex.test(get_msg) == true) {
      var decrypt_msg =  get_msg
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u")
        .replaceAll("ober", "o");
        return encrypt_txt.innerHTML = decrypt_msg;
    } else {
        alert("Digite uma mensagem")
    }
}

btn_decrypt.onclick = decrypt;

function copy_txt(){
    var txt_encoded = encrypt_txt.value;
    txt_encoded.select();
    document.execCommand("copy");
    alert(txt_encoded);
}


btn_copy.onclick = copy_txt;
