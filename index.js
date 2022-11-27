//Random number Generator

var num1 =Math.floor( Math.random()*6 );
var num2 =Math.floor( Math.random()*6 );


const btn = document.getElementById("btn");

btn.addEventListener('click' ,()=>{
// Converting the links
var key1 = document.getElementById("dice1");
key1.setAttribute ("src" , "images/dice" + num1 + ".png");

// Converting the links
var key2 = document.getElementById("dice2");
key2.setAttribute ("src" , "images/dice" + num2 + ".png");


if (num1 == num2)
{
    document.getElementById("h1").innerHTML = " Oops try Again...! "
}

else if (num1 > num2)
{
    document.getElementById("h1").innerHTML = " Player 1 Wins...! "
}

else
{
    document.getElementById("h1").innerHTML = " Player 2 Wins...! "
}
} 
)
