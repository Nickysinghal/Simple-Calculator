const equal = document.getElementById('equal');
const input = document.getElementById('input');
const AC = document.querySelector("#AC");
const arith1 = document.getElementsByClassName("arith");
const del = document.getElementById("del");

function evaluate(){
    let exp = input.value;
    let ans= eval(exp);
    input.value = ans;
}

function allClear(){
    input.value="";
}

function arith(element){
    input.value+=element.innerHTML;
   
}

equal.addEventListener("click",evaluate);
AC.addEventListener("click",allClear);

input.addEventListener("keypress",(event)=>{
    if(event.key=="Enter"){
        evaluate();
    }
})

del.addEventListener("click",()=>{
    input.value = input.value.slice(0, -1);
})

for(let i=0;i<arith1.length;i++){
arith1[i].addEventListener("click",()=>{
    arith(arith1[i]);
});


}