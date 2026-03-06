let pages = JSON.parse(localStorage.getItem("pages")) || [];
let current = 0;

const editor = document.getElementById("editor");
const pagesDiv = document.getElementById("pages");

function save(){
pages[current].content = editor.innerHTML;
pages[current].date = new Date().toLocaleString();
localStorage.setItem("pages",JSON.stringify(pages));
updateInfo();
}
function uploadImage(){

let input=document.createElement("input");

input.type="file";
input.accept="image/*";

input.onchange=function(){

let file=input.files[0];

let reader=new FileReader();

reader.onload=function(e){

document.execCommand("insertImage",false,e.target.result);

};

reader.readAsDataURL(file);

};

input.click();

  }
function loadPages(){

pagesDiv.innerHTML="";

pages.forEach((p,i)=>{

let div=document.createElement("div");
div.className="page";
div.textContent=p.title;

div.onclick=()=>{
current=i;
editor.innerHTML=p.content;
};

pagesDiv.appendChild(div);

});

}

document.getElementById("newPage").onclick=()=>{

let name=prompt("Page name");

pages.push({
title:name,
content:"",
date:""
});

localStorage.setItem("pages",JSON.stringify(pages));

loadPages();

};

editor.addEventListener("input",save);

function format(cmd){
document.execCommand(cmd,false,null);
}



function updateInfo(){

let words=editor.innerText.split(/\s+/).length;

document.getElementById("wordCount").innerText="Words: "+words;

document.getElementById("lastEdit").innerText="Last edit: "+pages[current].date;

}

document.getElementById("search").oninput=e=>{

let q=e.target.value.toLowerCase();

document.querySelectorAll(".page").forEach(p=>{
p.style.display=p.textContent.toLowerCase().includes(q)?"block":"none";
});

};

document.getElementById("darkToggle").onclick=()=>{
document.body.classList.toggle("dark");
};

if(pages.length===0){

pages.push({
title:"Myfunction uploadImage(){

let input=document.createElement("input");

input.type="file";
input.accept="image/*";

input.onchange=function(){

let file=input.files[0];

let reader=new FileReader();

reader.onload=function(e){

document.execCommand("insertImage",false,e.target.result);

};

reader.readAsDataURL(file);

};

input.click();

  } First Page",
content:"",
date:""
});

}

editor.innerHTML=pages[0].content;

loadPages();

if('serviceWorker' in navigator){
navigator.serviceWorker.register("service-worker.js");
               }
function deletePage(){

if(!confirm("Delete this page?")) return;

pages.splice(current,1);

if(pages.length===0){

pages.push({
title:"New Page",
content:"",
date:""
});

}

current=0;

localStorage.setItem("pages",JSON.stringify(pages));

editor.innerHTML=pages[0].content;

loadPages();

  }
