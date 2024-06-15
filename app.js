//first of all get user's choice
let userscore = 0;
let compscore = 0;
let drawscore = 0;

let yourscore = document.getElementById("yourscore");
let drawscoremsg = document.getElementById("drawscore");
let computerscore = document.getElementById("compscore");
let lstmsg = document.getElementById("declare");

let usersChoice = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
//first mistake thought h4 to use as button but just get clicked elment
usersChoice.forEach( (choice)=>{
    let choiceId = choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        // console.log("you clicked",choiceId);
        
        whowon(choiceId);
    })
})

const getChoice=()=>{
    let choiceArray = ["rock","paper","scissors","lizard","spock"];
    let ranId = Math.floor(Math.random()*5);
    
    return choiceArray[ranId];
}


const draw = ()=>{
    console.log("game is draw");
    drawscore++;
    drawscoremsg.innerText = `${drawscore}`;
    msg.innerHTML = "Game is Draw";
}

const whowon=(userChoice)=>{
    let compChoice = getChoice();
    console.log(compChoice);
    
    if(compChoice == userChoice){
        lstmsg.innerText = `you choosed ${userChoice} and computer choosed ${compChoice} `;
        draw();
    }
    else{
        lstmsg.innerText = `you choosed ${userChoice} and computer choosed ${compChoice} `;
        let userWin = true;
        if (userChoice === "rock"){
            //scissors,paper,lizard,spock
            // userWin = compChoice === "paper" ? false:true;
            if(compChoice=="scissors" || compChoice=="lizard"){
                msg.innerHTML = "you Won!";
                userscore++;
            }
            else{
                msg.innerHTML = "you lose";
                compscore++;
            }
        }
        else if(userChoice === "paper"){
            //rock,scissors,lizard,spock
            if(compChoice=="rock" || compChoice=="spock"){
                msg.innerHTML = "you Won!";
                userscore++;
            }
            else{
                msg.innerHTML = "you lose";
                compscore++;
            }
        }
        else if(userChoice === "scissors"){
            //rock,paper,lizard,spock
            if(compChoice=="paper" || compChoice=="lizard"){
                msg.innerHTML = "you Won!";
                userscore++;
            }
        else{
            msg.innerHTML = "you lose";
            compscore++;
        }
    }
    else if(userChoice === "lizard"){
        //rock,paper,scissors,spock
        if(compChoice=="paper" || compChoice=="spock"){
            msg.innerHTML = "you Won!";
            userscore++;
        }
        else{
            msg.innerHTML = "you lose";
            compscore++;
        }
    }
    else if(userChoice === "spock"){
        //rock,paper,lizard,scissors
        if(compChoice=="paper" || compChoice=="spock"){
            msg.innerHTML = "you Won!";
            userscore++;
        }
        else{
            msg.innerHTML = "you lose";
            compscore++;
        }
    }
    
}
yourscore.innerText = `${userscore}`;
computerscore.innerText = `${compscore}`;

// msg.innerHTML = "Restart";
}

function restart(){
    drawscore = 0;
    userscore = 0;
    compscore = 0;
    
    yourscore.innerText = `${userscore}`;
    drawscoremsg.innerText = `${drawscore}`;
    computerscore.innerText = `${compscore}`;
}