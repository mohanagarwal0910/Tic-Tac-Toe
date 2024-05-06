let box=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//playerX  and playerO

const winpattern=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]
const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
};
box.forEach((box) => {
     box.addEventListener("click", () =>{
       console.log("box was clicked");
       if(turnO){
        box.innerText= "O";
        box.style.color="red";
        turnO=false;
       }
       else{
        box.innerText= "X";
        box.style.color="purple";
        turnO=true;

       }
       box.disabled=true;
       checkwinner();
      });
});
const checkwinner= () => {
     for(let pattern of winpattern){
        let pos1val=box[pattern[0]].innerText;
        let pos2val=box[pattern[1]].innerText;
        let pos3val=box[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
            console.log("winner",pos1val);
            showWinner(pos1val);
            }
        }
     }
};
const showWinner= (winner) =>{
     msg.innerText=`Congratulation , WINNER is ${winner}`;
     msgContainer.classList.remove("hide");
     disableboxes();
};
const disableboxes=() =>{
       for(let b of box){
              b.disabled =true;
       }
};
const enableboxes=() =>{
    for(let b of box){
           b.disabled =false;
           b.innerText="";
    }
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


    
