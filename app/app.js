

const Regex = /^[a-z\s]+$/;

var txt_msg = document.getElementById("txt-criptography");

var encrypt_txt = document.getElementById("txt-descriptography");

var btn_encrypt = document.getElementById("btn_criptography");
var btn_decrypt = document.getElementById("btn_descriptography");
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
        alert("Digite uma mensagem valida")
    }
}
btn_encrypt.onclick = encrypt;
// Função para criar a descriptografia
function decrypt() {
    
    var get_msg = encrypt_txt.innerHTML;

    if(get_msg==""){
        alert("ESSE CARALHO TÁ VAZIO") 
    } else{
        if (Regex.test(get_msg) == true) {
            var decrypt_msg =  get_msg
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ufat", "u")
            .replaceAll("ober", "o");
            return encrypt_txt.innerHTML = decrypt_msg;
        } else {
            alert("Digite uma mensagem valida!")
        }
    }

}
btn_decrypt.onclick = decrypt;

function copyMsg() {
    txt_msg.focus();
    txt_msg.select();
    document.execCommand('copy');
}
btn_copy.onclick = copyMsg;

