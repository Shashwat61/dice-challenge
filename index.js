//for image1
var randomnumber=Math.floor(Math.random() * 6)+1;//1-6//
var randomdice="dice"+randomnumber+".png";
var randomimagesource="images/"+randomdice;
var image=document.querySelectorAll("img")[0];
image.setAttribute("src",randomimagesource);

//for image2
var randomnumber1=Math.floor(Math.random() * 6)+1;
var randomdice1="dice"+randomnumber1+".png";
var randomimagesource1="images/"+randomdice1;
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomimagesource1);



if(randomnumber>randomnumber1){
  document.querySelector("h1").innerHTML="🎊Player 1 wins!";
}
else if(randomnumber<randomnumber1){
  document.querySelector("h1").innerHTML="🎊Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML="🎏It's a tie!";
}
