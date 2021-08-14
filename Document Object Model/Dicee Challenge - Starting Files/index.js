var num = Math.floor(Math.random() * 6 + 1);

var rimg="images/dice"+num+".png";

var imag1=document.querySelectorAll("img")[0];
imag1.setAttribute("src",rimg);

var num2 = Math.floor(Math.random() * 6 + 1);

var rimg2="images/dice"+num2+".png";
var imag2=document.querySelectorAll("img")[1];
imag2.setAttribute("src",rimg2);


if(num>num2)
{
  document.querySelector("h1").innerHTML="✨Player 1 Wins✨";
}
else if (num<num2)
{
  document.querySelector("h1").innerHTML="✨Player 2 Wins✨";
}
else if(num===num2)
{
  document.querySelector("h1").innerHTML="😦Woah , Its a tie😦";
}
