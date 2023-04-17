class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`Ninja's name is ${this.name}`);
        return this;
    }
    showStats(){
        console.log(`Name:${this.name} Health:${this.health} Speed:${this.speed} Strength:${this.strength} `);
        return this;
    }
    drinkSake(){
        this.health +=10;
        console.log(`Ninja's health after sake ${this.health}`);
        return this;
    }
}

// const ninja1 = new Ninja("Hyabusa", 0);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

module.exports = Ninja;