var myscr=0;
var compscr=0;
var flag=0

var choices=document.querySelectorAll(".choice");

var myrock=document.querySelector("#group-my-rock");
var mypaper=document.querySelector("#group-my-paper");
var myscissors=document.querySelector("#group-my-scissors");
var comprock=document.querySelector("#group-comp-rock");
var comppaper=document.querySelector("#group-comp-paper");
var compscissors=document.querySelector("#group-comp-scissors");

var message=document.querySelector("#msg");

var userscore=document.querySelector("#user-score");
var compscore=document.querySelector("#comp-score");

var contin=document.querySelector("#btn");

function draw()
{
    message.innerText="Draw Game";
    message.style.backgroundColor="#E5E4E2";
    message.style.color="black";
}
function showresult(userwin,myoption,compoption)
{
    if(userwin==true)
    {
        myscr++;
        message.innerText="You Win. "+myoption+" beats "+compoption
        message.style.backgroundColor="green";
        userscore.innerText=myscr;

    }
    if(userwin==false)
    {
        compscr++;
        message.innerText="You Lost. "+compoption+" beats "+myoption
        message.style.backgroundColor="red";
        compscore.innerText=compscr;

    }
}
function generator()
{
    var options=["Rock","Paper","Scissors"];
    var randomnum=Math.floor(Math.random()*3);
    return options[randomnum];
}
function playgame(myoption)
{
    if(flag==0)
    {
        flag=1;
            var compoption=generator();
        //display my choice
            if(myoption=="Rock")
                myrock.classList.remove("group-my-rock");
            else if(myoption=="Paper")
                mypaper.classList.remove("group-my-paper");
            else if(myoption=="Scissors")
                myscissors.classList.remove("group-my-scissors");
        //now compute choice display
            if(compoption=="Rock")
                comprock.classList.remove("group-comp-rock");
            else if(compoption=="Paper")
                comppaper.classList.remove("group-comp-paper");
            else if(compoption=="Scissors")
                compscissors.classList.remove("group-comp-scissors");
        //checking the match
            if(myoption==compoption)
                draw();
            else
            {
                var userwin=true;
                if(myoption==="Rock")
                {
                    userwin=compoption==="Paper"?false:true;
                }
                else if(myoption==="Paper")
                {
                    userwin=compoption==="Scissors"?false:true;
                }
                else if(myoption==="Scissors")
                {
                    userwin=compoption==="Rock"?false:true;
                }
            }
            showresult(userwin,myoption,compoption);     
    }

}
choices.forEach((choice) => {
   choice.addEventListener("click",()=>{
    var myoption=choice.getAttribute("id");
    playgame(myoption);
   });

});

contin.addEventListener("click", () =>{
    myrock.classList.add("group-my-rock");
    mypaper.classList.add("group-my-paper");
    myscissors.classList.add("group-my-scissors");
    comprock.classList.add("group-comp-rock");
    comppaper.classList.add("group-comp-paper");
    compscissors.classList.add("group-comp-scissors");
    flag=0;
})