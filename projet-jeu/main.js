// créer le plateau de jeu
var player; // personnage du player
var $player; // element HTML du player
var boss; // personnage du boss
var $boss; // element HTML du boss
var question; // question du boss
var answer; // réponse du joueur
var discussion; // compteur de discussion avec le boss
var interact; // boolean qui détermine si le player peut interragir
var niveau = 0; // niveau du jeu
var gameBoard = [];
var elements = [];
var debut = false; // boolean pour savoir si l'interaction a commencé
var bossChoice;
var door;
var passerNiveau = false;
var gameOver = false;
var dungeon = document.getElementById("dungeon");
var ctx = dungeon.getContext("2d");
var dungeonimage = document.getElementById("dungeonSource");
var flammes1;
var flammes2;
var flammes3;
var flammes4;








// créer le décor

// faire le tour du donjon
var x = 0;
ctx.drawImage(dungeonimage,0,0,16,16,0,x,50,50);
for (i=0;i<400;i+=50){
    ctx.drawImage(dungeonimage,16,0,16,16,i+50,0,50,50);
}
ctx.drawImage(dungeonimage,32,0,16,16,450,0,50,50);
for (i=0;i<450;i+=50){
    ctx.drawImage(dungeonimage,0,16,16,16,0,i+50,50,50);
}
ctx.drawImage(dungeonimage,0,32,16,16,0,500,50,50);
for (i=0;i<400;i+=50){
    ctx.drawImage(dungeonimage,16,32,16,16,i+50,500,50,50);
}
ctx.drawImage(dungeonimage,32,32,16,16,450,500,50,50);
for (i=0;i<450;i+=50){
    ctx.drawImage(dungeonimage,32,16,16,16,450,i+50,50,50);
}

// faire le fond du donjon
for (i=50;i<450;i+=50){
    for (j=50;j<500;j+=50){
        ctx.drawImage(dungeonimage,16,16,16,16,i,j,50,50);
    }
}











function createBoard() {
    
    for (var i=0;i<10;i++){
        for (var j=0;j<10;j++){
            gameBoard.push([i,j]);
        }
    }

    let plateau = document.getElementById("absoluteBoard");

    enigmeBoss = enigmes[niveau];

    player = new Character(4,7,"player", "U");
    $boss = document.getElementsByClassName("boss")
    boss = new Boss(5,0,"boss", "D");
    elements.push(boss);
    console.log(elements);

    flammes1 = new flammes(1,0);
    flammes2 = new flammes(8,0);
    flammes3 = new flammes(1,8);
    flammes4 = new flammes(8,8);
    elements.push(flammes1,flammes2,flammes3,flammes4);

    door = new Door(5,-1);
  //  $boss.style.backgroundPosition = enigmeBoss.bossImage[0];

    question = document.getElementById("bossQuestion");
    answer = document.getElementById("playerAnswer");


   // dessiner les personnages au départ;
   player.draw();
   boss.draw();
   door.draw();

}




    // fonctions animations

let frames = 0;
function animLoop(){
    frames++;

    if (frames%10 === 0) {
        gdraw();
        if(gameOver === true){
            gameOverLoop();
        }
    }


    requestAnimationFrame(animLoop);
}

function gdraw(){
    flammes1.draw();
    flammes2.draw();
    flammes3.draw();
    flammes4.draw();
}

function gameOverLoop(){
    player.turn();
    player.draw();
}




















    // lancer le jeu

var startBtn = document.getElementById('button');
startBtn.onclick = function(){
    niveau = 0;
    discussion = 0;
    start();
}    


function start(){
    [...document.querySelectorAll("div")].map(function(el){
        el.classList.remove(`boss`);
        el.classList.remove(`player`);
    });
    document.getElementById('globalBoard').style.visibility='visible';
    createBoard();
    document.getElementById('button').blur();
    requestAnimationFrame(animLoop);
    
    let temp = document.getElementById('niveau');
    temp.innerHTML =`Niveau ${niveau}`;
    startBtn.value =`Restart`;
    question.textContent = "";
    answer.textContent = "";

    let sound = document.getElementById('audioJeu');
    sound.play();

    gameOver = false;

}


    // méthode de déplacement du personnage principal et interactions

document.onkeydown = function (e){

    // vider les box de discussion

        answer.innerHTML = "";
        question.innerHTML = "";
    

    // faire bouger le personnage
    $player = document.querySelector(".player")

    switch (e.keyCode){
        case 37:
            player.moveLeft();
            player.draw(); 
            break;
        case 39:
            player.moveRight();
            player.draw(); 
            break;
        case 38:
            player.moveUp();
            player.draw(); 
            break;
        case 40:
            player.moveDown();
            player.draw(); 
            break;       
    }
   // player.draw(); 
    interact = player.interact(boss)


    // faire interagir le personnage avec le boss

    interact = player.interact(boss)

    if ((interact===false) || (debut === false)){
        compt = 0;
        discussion = 0; 
    }   

    if ((interact===true) && (discussion === 0)){
        answer.textContent = "Appuez sur A pour discuter"; 
   //     clearInterval(intervalID);
        boss.direction = "U";
        boss.draw();
        debut = true;
    }

    if ((e.keyCode === 65) && (interact === true) && (discussion === 1)){
        question.textContent = "Bienvenue dans le donjon des questions. Sauras-tu resoudre mon enigme ? ";
        answer.textContent = "Appuyez sur A pour continuer";
    }

    if ((e.keyCode === 65) && (interact === true) && (discussion === 2)){
        question.innerHTML = enigmeBoss.question1;
        answer.innerHTML = enigmeBoss.answer1;
    } 

    if ((e.keyCode === enigmeBoss.keyCode) && (interact === true) && (discussion === 3)){
        if(niveau===3){
            question.textContent = "Tu es la meilleure personne du monde";
            boss.undraw();
        } else {
        question.textContent = "Bravo. Tu es tres intelligent. Tu peux passer au monde suivant... ";
        answer.textContent = "";
        elements.sli
        boss.moveLeft();

        boss.draw();
        setTimeout(function(){door.open2();},200); 
        setTimeout(function(){door.open3();},400); 
        door.open1();
        passerNiveau = true;}
    } else if ((e.keyCode !== enigmeBoss.keyCode) && (interact === true) && (discussion === 3)){
        question.textContent = "Tu es nul. Archi nul.";
        answer.textContent = "Tu peux recommencer si tu penses en etre capable";
        gameOver = true;    

     }

    // faire passer au monde suivant
    if(player.interact(door)){
        answer.textContent = "Appuyer sur A pour entrer";
    }

    if ((e.keyCode ===65) && (passerNiveau === true)&&(player.interact(door))){
        answer.textContent = "";
        niveau = niveau + 1;
        let temp = document.getElementById('niveau');
        temp.innerHTML =`Niveau ${niveau}`;
        enigmeBoss = enigmes[niveau];
        player.undraw();
        boss.undraw();
        discussion = 0;
        passerNiveau = false;
 //     clearInterval(intervalID);
        start();
    }   

    if (interact){
    discussion = discussion +1;
    } 
    
}




