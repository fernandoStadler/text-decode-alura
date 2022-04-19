// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`

// **Requisitos:**
// - Deve funcionar apenas com letras minúsculas
// - Não devem ser utilizados letras com acentos nem caracteres especiais
// - Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original. 

// Por exemplo:
// `"gato" => "gaitober"`
// `gaitober" => "gato"`


const Regex =  /^[a-z]+$/;    


function criptografar(str) {
    
    return str
        .replace(/a/g,"ai")
        .replace(/e/g,"enter")
        .replace(/i/g,"ei")
        .replace(/o/g,"ober")
        .replace(/u/g,"ufat");
}

function descriptografar(str) {
    
    return str
        .replace(/ai/g,"a")
        .replace(/enter/g,"e")
        .replace(/ei/g,"i")
        .replace(/ober/g,"o")
        .replace(/ufat/g,"u");
}

var saida = criptografar("gato");

if(Regex.test(saida)==true) {
    console.log(saida);
} else {
    console.log("Digite uma msg valida");
}


