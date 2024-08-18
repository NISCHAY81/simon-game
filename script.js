let gameSeq=[];
let userSeq=[];
let btns=[" yellow", "red","purple","green" ];
 
let started = false;
let level = 0;

let h2= document.querySelector("h2");

 document.addEventListener("keypress",function(){ // pura programm or window m click krne ke liye hota hai
  
    if(started == false){
        console.log("game started")
        started = true;

        levelup();
    }
 });

 function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },400);
 }

 function levelup(){
    level++;
  h2.innerText = `level ${level}`;

   let randIdx = Math.floor(Math.random() * 3);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`)
  btnFlash(randBtn);
 }
   
 function btnPress(){
    console.log(this);
    let btn = this;
    btnFlash(btn)

 }
 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
     btn.addEventListener("click",btnpress);
 }