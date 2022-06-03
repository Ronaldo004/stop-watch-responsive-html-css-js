var msec=00;
var sec=00;
var min=00;
var msecheading=document.getElementById("msec");
var secheading=document.getElementById("Second");
var minheading=document.getElementById("Minute");
var interval;
var push=document.getElementById("Push")

push.disabled=true;


function time(){
    msec++;
    msecheading.innerHTML=msec;
    if(msec>=100){
        msec=0;
        sec++;
        secheading.innerHTML=sec;

    }
    else if(sec>=60){
        sec=0;
        min++;
        minheading.innerHTML=min;
    }

}

function Start(){
   
    interval=setInterval(time,10)
    var start =document.getElementById("start");
    var push=document.getElementById("Push");
    var reset=document.getElementById("stop")
   if(start.disabled=true){
       push.disabled=false;
       reset.disabled=false;

   }
   push.style.backgroundColor="red";
   
   start.style.backgroundColor="green";

}
function Push(){
  clearInterval(interval);
  var start=document.getElementById("start");
  var push=document.getElementById("Push");
  push.style.backgroundColor="green";
  start.style.backgroundColor="red";
 if(push.disabled=true){
     start.disabled=false;
 }
 
}
function reset(){
    msecheading.innerHTML=00;
    secheading.innerHTML=00;
    minheading.innerHTML=00;
    clearInterval(interval);
    var start =document.getElementById("start");
    var reset=document.getElementById("stop");
    var push=document.getElementById("Push");
    push.style.backgroundColor="red";
    if(reset.disabled=false){
        start.disabled=true;
        
       

    }
    else if(reset.disabled=false){
        push.disabled=true;
      
        
    }
    else{
        start.disabled=false;
        push.disabled=false;
    }
  push.style.backgroundColor="transparent"
  start.style.backgroundColor="transparent"

}