// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength
    }

    attack (){
        return this.strength
    }

    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
        
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        else{
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        //choose random saxon and viking and equals the damage to the random saxon the same as the strenght of the random viking
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        const action = randomSaxon.receiveDamage(randomViking.attack());

        //remove any saxon whose health is less than 0
        this.saxonArmy.forEach((saxonElem, i) => {
            if(saxonElem.health <= 0){
                this.saxonArmy.splice(i,1)
            }
        })

        return action
    }

    saxonAttack (){
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        const action = randomViking.receiveDamage(randomSaxon.attack());

        //remove dead vkings
        this.vikingArmy.forEach((vikingElem, i) => {
            if(vikingElem.health <= 0){
                this.vikingArmy.splice(i,1)
            }
        })

        return action
    }

    

    showStatus(){
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        }

        else if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...'
        }

        else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}

