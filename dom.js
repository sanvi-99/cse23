//document.writeln("hello");

function result(){
    let changeColor=document.getElementById('text');
    changeColor.style.color="aqua";
    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor="blue";
}

let para=document.getElementById("paratext");
function changetextColor(){
    para.style.backgroundColor="#" +Math.floor(Math.random() * 16777215). toString(16);
}
para.addEventListener('mouseover',changetextColor);