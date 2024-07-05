var timer = 60;
var score = 0;
var hitrn = 0;

function BubbleMaker(){
    var clutter="";

for (var i = 1; i<=120;i++){
    var rn= Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}



function runTimer(){
    var timerint=setInterval (function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint)
            let pbtm = document.querySelector("#pbtm");
            pbtm.innerHTML = `<h1>Game Over</h1>
            <h2>Your Score is ${score}</h2> `;
            pbtm.style.color = `black`
            
        }
        
    },1000);

}



function newHit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;  
}



function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
    }
    

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedno = (Number(dets.target.textContent))
    console.log(clickedno);
    if(clickedno === hitrn){
        increaseScore();
        BubbleMaker();
        newHit();
    }
});

runTimer();
BubbleMaker();
newHit();