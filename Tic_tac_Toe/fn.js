var boxes=document.querySelectorAll(".button");
var resetbtn=document.querySelector("#resetting");
var msgcontainer=document.querySelector("#msg");
var para=document.querySelector("#winner");
var newbutton=document.querySelector("#newgame");
var resetbutton=document.querySelector("#resetting");

var turnx = true;

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function resetting (){
    turnx=true;
    boxes.forEach((box) =>{
        box.disabled=false;
        box.innerText="";
    });
    msgcontainer.classList.add("mess");
}

newbutton.addEventListener("click",resetting);
resetbutton.addEventListener("click",resetting);


boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnx){
            box.innerText="X";
            turnx=false;
        }      
        else{
            box.innerText = "O";
            turnx=true;
         }
        box.disabled=true;//disable button after click

        checkwin ();
     });
});

function showresult(winner){
   para.innerText= 'Congratulation !!! Winner is '+ winner;
   msgcontainer.classList.remove("mess");
}


function checkwin()
{
    for(pattern of win){
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="" && pos1==pos2 && pos2==pos3)
        {
            boxes.forEach((box) =>{
                box.disabled=true;
            });
            showresult(pos1);
        }
    }
}






