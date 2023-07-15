/* Code for the dice game */

// Code 1

// var rnum1 = Math.floor(Math.random()*6+1);
// var rnum2 = Math.floor(Math.random()*6+1);
// var string1 = "./images/dice"+rnum1+".png";
// var string2 = "./images/dice"+rnum2+".png";
// // console.log(string1);
// // console.log(string2);
// document.querySelector(".img1").setAttribute("src",string1);
// document.querySelector(".img2").setAttribute("src",string2);

// if(rnum1==rnum2)
//     document.querySelector("h1").textContent="Draw !";
// else if(rnum1>rnum2)
//     document.querySelector("h1").textContent="Player 1 Wins! 🚩";
// else 
//     document.querySelector("h1").textContent="Player 2 Wins! 🚩";

// Code 2
function randNum(selName)
{
    var rnum=Math.floor(Math.random()*6+1);
    var ans="./images/dice"+rnum+".png";
    document.querySelector(selName).setAttribute("src",ans);
    return rnum;
}
rn1 = randNum(".img1");
rn2 = randNum(".img2");
if(rn1==rn2)
    document.querySelector("h1").textContent="Draw !";
else if(rn1>rn2)
    document.querySelector("h1").textContent="Player 1 Wins! 🚩";
else if(rn2>rn1)
    document.querySelector("h1").textContent="Player 2 Wins! 🚩";


