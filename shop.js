var m1=document.getElementById('m1');
console.log(m1);

function decrement1(){
 var qnt1= document.getElementById('qnt1').innerHTML;
console.log(qnt1);
if (qnt1>0){
 qnt1--;}
 document.getElementById('qnt1').innerHTML=qnt1;
 var tp1=document.getElementById('t-p1')
     tp1.innerHTML=Number(qnt1)*3;
     var st=document.getElementById('st').innerHTML;
     var tp2=document.getElementById('t-p2').innerHTML;
     var tp3=document.getElementById('t-p3').innerHTML;
     st=Number(tp1.innerHTML)+Number(tp2)+Number(tp3);
     document.getElementById('st').innerHTML=st;
}
m1.addEventListener("click",decrement1);

var p1=document.getElementById('p1');
 function increment1(){
     var qnt1=document.getElementById('qnt1').innerHTML;
     qnt1++;
     document.getElementById('qnt1').innerHTML=qnt1;
     var tp1=document.getElementById('t-p1')
     tp1.innerHTML=Number(qnt1)*3;
     var st=document.getElementById('st').innerHTML;
     var tp2=document.getElementById('t-p2').innerHTML;
     var tp3=document.getElementById('t-p3').innerHTML;
     st=Number(tp1.innerHTML)+Number(tp2)+Number(tp3);
     document.getElementById('st').innerHTML=st;
 }
 p1.addEventListener("click",increment1);



 var m2=document.getElementById('m2');
 function decrement2(){
  var qnt2= document.getElementById('qnt2').innerHTML;
 console.log(qnt2);
 if (qnt2>0){
  qnt2--;}
  document.getElementById('qnt2').innerHTML=qnt2;
  var tp2=document.getElementById('t-p2')
      tp2.innerHTML=Number(qnt2)*2;
      var st=document.getElementById('st').innerHTML;
      var tp1=document.getElementById('t-p1').innerHTML;
      var tp3=document.getElementById('t-p3').innerHTML;
      st=Number(tp2.innerHTML)+Number(tp1)+Number(tp3);
      document.getElementById('st').innerHTML=st;
 }
 m2.addEventListener("click",decrement2);
 
 var p2=document.getElementById('p2');
  function increment2(){
      var qnt2=document.getElementById('qnt2').innerHTML;
      qnt2++;
      document.getElementById('qnt2').innerHTML=qnt2;
      var tp2=document.getElementById('t-p2')
      tp2.innerHTML=Number(qnt2)*2;
      var st=document.getElementById('st').innerHTML;
      var tp1=document.getElementById('t-p1').innerHTML;
      var tp3=document.getElementById('t-p3').innerHTML;
      st=Number(tp2.innerHTML)+Number(tp1)+Number(tp3);
      document.getElementById('st').innerHTML=st;
 
  }
  p2.addEventListener("click",increment2);
 
  var m3=document.getElementById('m3');
 function decrement3(){
  var qnt3= document.getElementById('qnt3').innerHTML;
  if (qnt3>0){
  qnt3--;}
  document.getElementById('qnt3').innerHTML=qnt3;
  var tp3=document.getElementById('t-p3')
      tp3.innerHTML=Number(qnt3)*4;
      var st=document.getElementById('st').innerHTML;
      var tp2=document.getElementById('t-p2').innerHTML;
      var tp1=document.getElementById('t-p1').innerHTML;
      st=Number(tp3.innerHTML)+Number(tp2)+Number(tp1);
      document.getElementById('st').innerHTML=st;
 }
 m3.addEventListener("click",decrement3);
 
 var p3=document.getElementById('p3');
  function increment3(){
      var qnt3=document.getElementById('qnt3').innerHTML;
      qnt3++;
      document.getElementById('qnt3').innerHTML=qnt3;
      var tp3=document.getElementById('t-p3')
      tp3.innerHTML=Number(qnt3)*4;
      var st=document.getElementById('st').innerHTML;
      var tp2=document.getElementById('t-p2').innerHTML;
      var tp1=document.getElementById('t-p1').innerHTML;
      st=Number(tp3.innerHTML)+Number(tp2)+Number(tp1);
      document.getElementById('st').innerHTML=st;
   }
  p3.addEventListener("click",increment3);

//btn del1--------------------------------------------
var qnt1= document.getElementById('qnt1').innerHTML;
function zero1(){
qnt1=0;
document.getElementById('qnt1').innerHTML=qnt1;
document.getElementById('t-p1').innerHTML=0;
var st=document.getElementById('st').innerHTML;
var tp2=document.getElementById('t-p2').innerHTML;
var tp1=document.getElementById('t-p1').innerHTML;
var tp3=document.getElementById('t-p3').innerHTML;
st=Number(tp1)+Number(tp2)+Number(tp3);
document.getElementById('st').innerHTML=st;
}
var del1 = document.getElementById('del1');
console.log(del1)
del1.addEventListener("click",zero1);

//btn del2--------------------------------------
var qnt2= document.getElementById('qnt2').innerHTML;
function zero2(){
qnt2=0;
document.getElementById('qnt2').innerHTML=qnt2;
document.getElementById('t-p2').innerHTML=0;
var st=document.getElementById('st').innerHTML;
var tp2=document.getElementById('t-p2').innerHTML;
var tp1=document.getElementById('t-p1').innerHTML;
var tp3=document.getElementById('t-p3').innerHTML;
st=Number(tp1)+Number(tp2)+Number(tp3);
document.getElementById('st').innerHTML=st;
}
var del2 = document.getElementById('del2');
console.log(del2)
del2.addEventListener("click",zero2);

//btn del3--------------------------------------
var qnt3= document.getElementById('qnt3').innerHTML;
function zero3(){
qnt3=0;
document.getElementById('qnt3').innerHTML=qnt3;
document.getElementById('t-p3').innerHTML=0;
var st=document.getElementById('st').innerHTML;
var tp2=document.getElementById('t-p2').innerHTML;
var tp1=document.getElementById('t-p1').innerHTML;
var tp3=document.getElementById('t-p3').innerHTML;
st=Number(tp1)+Number(tp2)+Number(tp3);
document.getElementById('st').innerHTML=st;
}
var del3 = document.getElementById('del3');
console.log(del3)
del3.addEventListener("click",zero3);



//like-btn==========================================
function colorHeart(el){

    if (el.target.style.color !== "red"){
        el.target.style.color ="red";
    }
    else {el.target.style.color = "black";}
};
var heart= document.querySelectorAll(".fa-heart");
console.log(heart.length); 
for (let i=0; i<heart.length; i++){

heart[i].addEventListener("click", colorHeart);
} 

/*var heart1=document.getElementById('heart1');
console.log(heart1.style.color);
function changeColor(){
    var heart1=document.getElementById('heart1');
    if (heart1.style.color !== "red")
    {heart1.style.color ="red";}
    else {heart1.style.color ="black";}
}
heart1.addEventListener("click",changeColor);*/
//heart1.addEventListener("click",()=> heart1.style.color ="red");










