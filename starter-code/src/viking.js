// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking {
    constructor(name, health, strength){
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(theDamage){
        this.health -= theDamage;
        if(this.health > 0){
            return `${this.name} has received ${theDamage} points of damage`;
        }
        else{
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);

    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else{
            return `A Saxon has died in combat`;
        }
    }


}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(objViking){
        this.vikingArmy.push(objViking);
    }

    addSaxon(objSaxon){
        this.saxonArmy.push(objSaxon);

    }

    vikingAttack(){
        let randViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randSaxon = Math. floor(Math.random() * this.saxonArmy.length);

        let message = this.saxonArmy[randSaxon].receiveDamage(this.vikingArmy[randViking].attack());

        if(this.saxonArmy[randSaxon].health <= 0){
            this.saxonArmy.splice(randSaxon, 1);
        }

        return message;
    }

    saxonAttack(){
        let randViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randSaxon = Math. floor(Math.random() * this.saxonArmy.length);

        let message = this.vikingArmy[randViking].receiveDamage(this.saxonArmy[randSaxon].attack());

        if(this.vikingArmy[randViking].health <= 0){
            this.vikingArmy.splice(randViking, 1);
        }

        return message;
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day...";
        }
        else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
