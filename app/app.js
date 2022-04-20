
const Regex =  /^[a-z\s]+$/; 

//Regras de negocio e lógica,

function criptografar(str) {
    
    return str
        .replaceAll("e","enter",)
        .replaceAll("i","imes")
        .replaceAll("a","ai")
        .replaceAll("u","ufat")
        .replaceAll("o","ober");   
}

function descriptografar(str) {
    
    return str
        .replaceAll("enter","e")
        .replaceAll("imes","i")
        .replaceAll("ai","a")
        .replaceAll("ufat","u")
        .replaceAll("ober","o"); 
}

//Integração com o frontend
var texto = "gato";
var saida = criptografar(texto);

var descripto = descriptografar("pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!");

console.log(descripto)

if(Regex.test(saida)==true) {
    console.log(saida);
} else {
    console.log("Digite uma msg valida"+"SAIDA: "+saida);
 }


