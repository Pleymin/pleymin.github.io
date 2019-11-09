// creation des classes de door
class Door{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.condition = "C"
    }

draw(){
    let temp = document.getElementById(`${this.y}/${this.x}`);
    temp.className = "";
    temp.classList.add(`${"door"}`);
    temp.classList.add(`${"C"}`);
}



open1(){
    let temp = document.getElementById(`${this.y}/${this.x}`);
    temp.className = "";
    temp.classList.add(`${"door"}`);
    temp.classList.add(`${"O"}`);
    temp.classList.add(`${"A"}`);
}

open2(){
    let temp = document.getElementById(`${this.y}/${this.x}`);
    temp.className = "";
    temp.classList.add(`${"door"}`);
    temp.classList.add(`${"O"}`);
    temp.classList.add(`${"B"}`);    
}   
    
open3(){
    let temp = document.getElementById(`${this.y}/${this.x}`);
    temp.className = "";
    temp.classList.add(`${"door"}`);
    temp.classList.add(`${"O"}`);
    temp.classList.add(`${"C"}`);
}


close(){
    let temp = document.getElementById(`${this.y}/${this.x}`);
    temp.className = "";
    temp.classList.add(`${"C"}`);
}

}

// creation des classes de flammes
class flammes{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.condition = 1;
        this.xboard = x*50;
        this.yboard = y*50 + 50;
    }

    draw(){
        switch(this.condition){
            case 1:
                ctx.drawImage(dungeonimage,80,160,16,16,this.xboard,this.yboard,50,50);
                break;
            case 2:
                ctx.drawImage(dungeonimage,80,176,16,16,this.xboard,this.yboard,50,50);
                break;
            case 3:
                ctx.drawImage(dungeonimage,80,192,16,16,this.xboard,this.yboard,50,50);
                break;
            case 4:
                ctx.drawImage(dungeonimage,80,208,16,16,this.xboard,this.yboard,50,50);
                break;
            }
        if (this.condition === 4){this.condition = 1} else (this.condition +=1);
    }
}
