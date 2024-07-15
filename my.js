let gameseq = [];
let userseq = [];
let  btns = ["c1", "c2", "c3", "c4"];

let start = false;
let level = 0;
let prevlevel=0;

let h2=document.querySelectorAll("h2");

document.addEventListener("keypress",function(){
    if(start == false)
    {
        console.log("started");
        start = true;
        levelup();
    }
   
});
function btnflas(btn){
    btn.classList.add("flash");
    setTimeout(function(){

        btn.classList.remove("flash");
    },250);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){

        btn.classList.remove("userflash");
    },250);

}
function levelup(){
    userseq = [];
    level++;
    h2[1].innerText=`Level ${level}`;
    let index=Math.floor(Math.random() * 4);
    let randclass = btns[index]; 
    gameseq.push(randclass);
    let randbtn = document.querySelector(`.${randclass}`);
    btnflas(randbtn);
}
function check(indx){
    if(userseq[indx] === gameseq[indx])
    {
        if(gameseq.length == userseq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else
    {
        if(prevlevel < level){
            h2[0].innerText =  `Highest score : ${level}`;
            prevlevel = level;
        } 
       
      
        h2[1].innerText="Game Over! Press any key to restart";
        
        gameseq = [];
        userseq = [];
        start = false;
        level = 0;
       
    }
}
function btnpress(bt){
    userflash(this);
    let color = this.getAttribute("id");
    console.log(color);
    userseq.push(color);
    check(userseq.length-1);
 
}
let allbtn = document.querySelectorAll(".btn")
for(bt of allbtn)
{
    bt.addEventListener("click",btnpress);
}