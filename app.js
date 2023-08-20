let gameSqe = [];
let userSqe = [];

let started = false;
let level = 0;
let color = ["red", "green", "yellow", "purple"];


document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        console.log("key pressed");

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");

    setTimeout( ()=>{
        btn.classList.remove("flash");
    }, 300);
}

function userflash(btn){
    btn.classList.add("userFlash");

    setTimeout( ()=>{
        btn.classList.remove("userFlash");
    }, 100);
}

function levelup(){
    userSqe = [];
    level++;
    let h3 = document.querySelector("h3");
    h3.innerText = `level : ${level}`;

    let random = Math.floor(Math.random() * 3);
    let randomCol = color[random];
    let btn = document.querySelector(`.${randomCol}`);

    btnflash(btn);
    
    gameSqe.push(randomCol);

}

let gamebtn = document.querySelectorAll(".box");

for(btn of gamebtn){
    btn.addEventListener("click", check);
}

function check() {

    if(started == true){
     userflash(this);
    let btncol = this.getAttribute("id");
    userSqe.push(btncol);

    if(userSqe[userSqe.length - 1] == gameSqe[userSqe.length - 1]){
        if(userSqe.length == gameSqe.length){
            levelup();
        }
    }else{
        let h3 = document.querySelector("h3");
        h3.innerText = `game over ! your score is ${level-1}
         press any key to resart the game`;
        started = false;
        level = 0;
        gameSqe = [];
    }
}
}

