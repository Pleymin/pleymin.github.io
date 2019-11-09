// creation des personnages
class Character{
    constructor(x,y, name, direction){
        this.x = x;
        this.y = y;
        this.name = name;
        this.prevx = x;
        this.prevy = y;
        this.direction = direction;
    }
        

    // dessiner le personnage à sa place attribuée par ses coordonnées
    draw(){
   //     [...document.querySelectorAll("div")].map(el => el.classList.remove(`${this.name}`));
    
        let prevtemp = document.getElementById(`${this.prevy}/${this.prevx}`);
        prevtemp.className = ""; 
        let temp = document.getElementById(`${this.y}/${this.x}`);
        temp.className = "";
        temp.classList.add(`${this.name}`);
        temp.classList.add(`${this.direction}`);
 
//       this.$el.style.top = `${this.y}px`
//       this.$el.style.left = `${this.x}px`
    }

    undraw(){
        let temp = document.getElementById(`${this.y}/${this.x}`);
        temp.className = "";
    }

    // faire se déplacer les personnages
    moveUp(){
        this.direction = "U";
        if (this.y <= 0){
            return;};
        this.prevy = this.y;
        this.prevx = this.x;
        this.y = this.y - 1;


        for (let i=0; i<elements.length;i++){
            if (this.stop(elements[i])===true){
                this.y = this.y + 1;
                return;}
        }
            return;
    }

    moveDown(){
        this.direction = "D";
        if (this.y >= 8){
            return;};
        this.prevy = this.y;
        this.prevx = this.x;
        this.y = this.y + 1;
       
        for (let i=0; i<elements.length;i++){
            if (this.stop(elements[i])===true){
                this.y = this.y - 1;
                return;}
        }
            return;
    }

    moveRight(){
        this.direction = "R";
        if (this.x >= 8){
            return;};
        this.prevy = this.y;
        this.prevx = this.x;
        this.x = this.x + 1;

        for (let i=0; i<elements.length;i++){
            if (this.stop(elements[i])===true){
                this.x = this.x - 1;
                return;}
        }
            return;
    }

    moveLeft(){
        this.direction = "L";
        if (this.x <= 1){
            return;}
        this.prevy = this.y;
        this.prevx = this.x;
        this.x = this.x - 1;

        for (let i=0; i<elements.length;i++){
            if (this.stop(elements[i])===true){
                this.x = this.x + 1;
                return;}
        }
            return;
    }

    // empecher les personnages d'être a la même place
    stop(char){
        if ((this.x===char.x)&&(this.y===char.y)){
            return true
        } else return false;
    }


    // faire interagir le player avec d'autres personnages
    interact(char){
        if ((this.x)===(char.x)){
            if (this.y===(char.y+1)){
                return true;
            }  
         } return false;
    }

    turn(){
        let temp = document.getElementById(`${this.y}/${this.x}`);
        temp.className = "";
        temp.classList.add(`${this.name}`);
        temp.classList.add(`${this.direction}`);
        
        if (this.direction === "U"){this.direction = "R"};
        if (this.direction === "R"){this.direction = "D"};
        if (this.direction === "D"){this.direction = "L"};
        if (this.direction === "L"){this.direction = "U"};
    }
}


class Boss{
    constructor(x,y, name, direction){
        this.x = x;
        this.y = y;
        this.name = name;
        this.prevx = x;
        this.prevy = y;
        this.direction = direction;
    }
        

    // dessiner le personnage à sa place attribuée par ses coordonnées
    draw(){
    
        let prevtemp = document.getElementById(`${this.prevy}/${this.prevx}`);
        prevtemp.className = ""; 
        let temp = document.getElementById(`${this.y}/${this.x}`);
        temp.className = "";
        temp.classList.add(`${this.name}`);
        temp.classList.add(`${this.direction}`);
    }

    undraw(){
        let temp = document.getElementById(`${this.y}/${this.x}`);
        temp.className = "";
    }

    // faire se déplacer les personnages
    moveUp(){
        if (this.y === 0){
            return;};
        this.prevy = this.y;
        this.prevx = this.x;
        this.y = this.y - 1;
            return;
    }

    moveDown(){
        if (this.y === 9){
            return;};
        this.prevy = this.y;
        this.prevx = this.x;
        this.y = this.y + 1;
            return;
    }

    moveRight(){
        if (this.x === 9){
            return;};
        this.prevy = this.y;
        this.prevx = this.x;
        this.x = this.x + 1;
            return;
    }

    moveLeft(){
        if (this.x === 0){
            return;}
        this.prevy = this.y;
        this.prevx = this.x;
        this.x = this.x - 1;
            return;
    }

}