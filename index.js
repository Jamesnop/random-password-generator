const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefghijklmnopqrstuvwxyz";
const numset="1234567890";
const symset="!@#$%^&*()_+/";
const pass=document.getElementById("pass-box");
const totalchar=document.getElementById("total-char");
const upcase=document.getElementById("upper-case");
const locase=document.getElementById("lower-case");
const num=document.getElementById("numbers");
const sym=document.getElementById("symbols");

const getrandom=(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
    
}
const passwordgen=(password="")=>{
    if(upcase.checked){
        password+=getrandom(upperset)
    }
    if(locase.checked){
        password+=getrandom(lowerset)
    }
    if(num.checked){
        password+=getrandom(numset)
    }
    if(sym.checked){
        password+=getrandom(symset)
    }
    if(password.length < totalchar.value){
        return passwordgen(password)
    };
    pass.innerText=truncateString(password,totalchar.value);
};
passwordgen();
document.getElementById("btn").addEventListener(
    "click",
    function(){
        passwordgen()
    }
)
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num);
    } else {
        return str;
    }
}

