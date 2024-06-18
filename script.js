const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefghijklmnopqrstuvwxyz";
const numberset="1234567890";
const symbolset="!@#$%^&*()";
let pass="";
const lower=document.getElementById("lower");
const upper=document.getElementById("upper");
const number= document.getElementById('number');
const symbol= document.getElementById('symbol');
const btn = document.getElementById('btn');
const range = document.getElementById('range');
const display= document.getElementById('display');
const getdata=(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)];
}
const genratepass =(pass="")=>{
    if(lower.checked){
        pass+=getdata(lowerset);
    }
    if(upper.checked){
        pass+=getdata(upperset);
    }
    if(number.checked){
        pass+=getdata(numberset);
    }
    if(symbol.checked){
        pass+=getdata(symbolset);
    }
    if(range.value>pass.length)
        {
            
           return genratepass(pass);
        }
    
    return pass;
}
const trimpass=(password)=>{
    return password.substring(0,range.value);
}
btn.addEventListener('click',()=>{
    const password=genratepass();
    if(range.value==password.length)
    display.value=password;
    else{
        display.value=trimpass(password);
    }
})