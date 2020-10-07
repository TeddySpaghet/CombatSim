console.log("sanitycheck")

/* 
Class for characters that helps keep code dry.
Properties for characters should be : name, health, damage, icon, atk1, atk2, atk3
attack1 and attack2 should be a low dmg, high % chance to hit and high dmd, lower % chance to hit.
attack3 should be a unique ability flavored to the character
I should probably have an RNG function in the global context that can be called by each attack that needs it
*/

//define global game variables

let activePlayer, gamePlaying, player0Char, player1Char, combatLog
activePlayer = 0;
combatLog = document.querySelector('#combatlog');
atkLog = document.querySelector('#atklog');
console.log(combatLog);


//base character creation and attribute allocation

class character {
    randomizerD20() {
        this.rng = (Math.floor(Math.random()* 20)+1);
        this.attackLog();
    }
    randomizerD6() {
        this.rng = (Math.floor(Math.random()* 6)+1);
    }
    randomizerD12() {
        this.rng = (Math.floor(Math.random()* 12)+1);
    }
    randomizerD4() {
        this.rng = (Math.floor(Math.random()*4)+1);
    }
    randomizerD10() {
        this.rng = (Math.floor(Math.random()*10)+1);
    }
    attackLog() {
        atkLog.textContent = this.name + " rolled a " + this.rng + " on their attack roll!";
    }
    attack1 () {
        this.randomizerD20()
        this.randomizerD6();
            if ( this.rng >= 6 && this.rng != 20) {
                combatLog.textContent =  this.name + " hits with a light attack dealing " + this.damage * this.rng + " damage to their opponent!";
            } else if (this.rng < 6) {
                combatLog.textContent =  this.name + " misses their a light attack!";
            } else if (this.rng = 20) { 
                combatLog.textContent =  this.name + " critically hits with a light attack!!!";
            } else {
                console.log('notworking')
            }
            nextPlayer()
        }
    attack2 () {
        this.randomizerD20()
            if ( this.rng >= 12 && this.rng != 20) {
                combatLog.textContent =  testChar.name + " hits with a heavy attack!";
            } else if (this.rng < 12) {
                combatLog.textContent =  testChar.name + " misses their heavy attack!";
            } else if (this.rng = 20) { 
                combatLog.textContent =  testChar.name + " critically hits with a heavy attack!!!";
            } else {
                console.log('notworking2')
            }
            nextPlayer()
    }
    constructor (name,health,damage, icon,rng) {    // need to figure out how to add the clasID to the extended classes
        this.name = name;  
        this.health = health;
        this.damage = damage;
        this.icon = icon;
        this.rng = rng;
    }
}

// special class addition, adding a special ability flavored to specific class

class testCharacter extends character {
    attack3() {
        this.randomizerD20()
        if ( this.rng >= 10 && this.rng != 20) {
            combatLog.textContent =  testChar.name + " hits with a special attack!";
        } else if (this.rng < 10) {
            combatLog.textContent = testChar.name + " misses their special attack!";
        } else if (this.rng = 20) { 
            combatLog.textContent = testChar.name + " critically hits with a special attack!!!";
        } else {
            console.log('notworking3')
        }
        nextPlayer()
    }

}

const testChar = new testCharacter ("Test", "20" , 1, "placeholder", 0, 0)
const testChar2 = new testCharacter ("Test(icle)", "25", 1, "placeholder", 0, 0)
console.log(testChar);
console.log(testChar2);

class fighter extends character {
    fighterLight() {
        this.randomizerD20()
            if ( this.rng >= 6 && this.rng != 20) {
                this.randomizerD6();
                console.log(this.rng)
                combatLog.textContent += "\n " + this.name + " hits with a quick thrust, dealing " + (this.damage * this.rng + 1 )+ " damage to their opponent!";
            } else if (this.rng < 6) {
                combatLog.textContent += this.name + "'s blade fails to find their target!";
            } else if (this.rng = 20) { 
                this.randomizerD6();
                console.log(this.rng)
                combatLog.textContent += this.name + " capitalizes on their opponent's inattention, their quick thrust is a critical hit and deals " + (this.damage * this.rng * 2 + 1 )+ " damage!!!";
            } else {
                console.log('notworking')
            }
        nextPlayer()
    }
    fighterHeavy () {
        this.randomizerD20()
        console.log("Fighter rolled a " + this.rng)
            if ( this.rng >= 12 && this.rng != 20) {
                this.randomizerD12();
                console.log("Fighter rolled a " + this.rng)
                combatLog.textContent = this.name + " manages to rend their foe with an overhead strike dealing " + (this.damage * this.rng + 3 )+ " damage!";
            } else if (this.rng < 12) {
                combatLog.textContent = this.name + " loses balance when preparing to attack, and fails to seize the initiative!";
            } else if (this.rng = 20) { 
                this.randomizerD12();
                console.log("Fighter rolled a " + this.rng)
                combatLog.textContent = this.name + " carves their sword deep into their foe with an overhead strike, and critically hits with a heavy attack for " + (this.damage * this.rng * 2 + 3) + " damage!!!";
            } else {
                console.log('notworking2')
            }
        nextPlayer()
        }
    fighterSpecial() { 
        this.randomizerD20()
        if ( this.rng >= 10 && this.rng < 18) {
            this.randomizerD10();
            console.log("Fighter rolled a " + this.rng);
            combatLog.textContent = this.name + " hits with a Swing and Punch combo, dealing " + (this.damage * this.rng + 3 )+ " damage to their opponent!";
            console.log(combatLog.textContent);
        } else if (this.rng < 10) {
            combatLog.textContent = this.name + " is unable to connect their Swing and Punch combo!";
        } else if (this.rng >= 18) { 
            this.randomizerD10();
            console.log(this.rng);
            combatLog.textContent = this.name + " critically hits with their Swing and Punch combo, dealing " + (this.damage * this.rng * 2 + 3 ) + " damage and sending their opponent flying!!!";
        } else {
            console.log('notworking3')
        }
        nextPlayer()
    }
    constructor (name,health,damage, icon,rng) {
        super(name,health,damage,icon,rng);
        this.classID = 1;
    }

}

class mage extends character {
    mageLight() {
        this.randomizerD20()
            if ( this.rng >= 6 && this.rng != 20) {
                this.randomizerD6();
                console.log(this.rng)
                combatLog.textContent = this.name + " sends a firebolt flying at their foe, dealing " + (this.damage * this.rng + 1 )+ " damage!";
            } else if (this.rng < 6) {
                combatLog.textContent = this.name + " is unable to concentrate on their spell!";
            } else if (this.rng = 20) { 
                this.randomizerD6();
                console.log(this.rng)
                combatLog.textContent = this.name + " sends their foe reeling with pain, their firebolt is a critical hit and deals " + (this.damage * this.rng * 2 + 1 )+ " damage!!!";
            } else {
                console.log('notworking')
            }
        nextPlayer()
    }
    mageHeavy () {
        this.randomizerD20()
        console.log("Mage rolled a " + this.rng)
            if ( this.rng >= 12 && this.rng != 20) {
                this.randomizerD12();
                console.log("Mage rolled a " + this.rng)
                combatLog.textContent = this.name + " conjures a powerful fireblast, dealing " + (this.damage * this.rng + 3 )+ " damage to their opponent!";
            } else if (this.rng < 12) {
                combatLog.textContent = this.name + "'s casting of their spell fizzles out, leaving them open to attack!";
            } else if (this.rng = 20) { 
                this.randomizerD12();
                console.log("Mage rolled a " + this.rng)
                combatLog.textContent = this.name + " summons a huge burst of flames, and critically hits with fireblast for " + (this.damage * this.rng * 2 + 3) + " damage to their opponent!!!";
            } else {
                console.log('notworking2')
            }
        nextPlayer()
        }
    mageSpecial() {
        this.randomizerD20()
        console.log(this.rng)
        if ( this.rng >= 10 && this.rng != 20) {
            this.randomizerD4();
            combatLog.textContent = this.name + " hits with two magic missles dealing " + ((this.damage * this.rng + 1) * 2 )+ " damage to their opponent!";
        } else if (this.rng < 10) {
            this.randomizerD4();
            combatLog.textContent = this.name + " hits with one magic missle dealing " + (this.damage * this.rng + 1 )+ " damage to their opponent!";
        } else if (this.rng = 20) { 
            this.randomizerD4();
            combatLog.textContent = this.name + " hits with all three magic missle dealing " + ((this.damage * this.rng + 1) * 3 )+ " damage to their opponent!!!";
        } else {
            console.log('notworking3')
        }
        nextPlayer();
    }

    constructor (name,health,damage, icon,rng) {
        super(name,health,damage,icon,rng);
        this.classID = 2;
    }
}

class cleric extends character {
    clericLight() {
        this.randomizerD20()
            if ( this.rng >= 6 && this.rng != 20) {
                this.randomizerD6();
                console.log(this.rng)
                combatLog.textContent = this.name + " slams their opponent with their mace, dealing " + (this.damage * this.rng + 1 )+ " damage!";
            } else if (this.rng < 6) {
                combatLog.textContent = this.name + "'s mace fails to find their target!";
            } else if (this.rng = 20) { 
                this.randomizerD6();
                console.log(this.rng)
                combatLog.textContent = this.name + " bashes their opponent in the head, critically hitting and dealing " + (this.damage * this.rng * 2 + 1 )+ " damage!!!";
            } else {
                console.log('notworking')
            }
        nextPlayer()
    }
    clericHeavy () {
        this.randomizerD20()
        console.log("Cleric rolled a " + this.rng)
            if ( this.rng >= 12 && this.rng != 20) {
                this.randomizerD12();
                console.log("Cleric rolled a " + this.rng)
                combatLog.textContent = this.name + "'s mace begins to glow with divine light before stricking their opponent, dealing " + (this.damage * this.rng + 3 )+ " damage!";
            } else if (this.rng < 12) {
                combatLog.textContent = this.name + " is unable to muster any divine power!";
            } else if (this.rng = 20) { 
                this.randomizerD12();
                console.log("Cleric rolled a " + this.rng)
                combatLog.textContent = this.name + " bursts with holy power, bashing their opponent and critically hitting dealing " + (this.damage * this.rng * 2 + 3) + " damage!!!";
            } else {
                console.log('notworking2')
            }
        nextPlayer()
        }
    clericSpecial() {
        this.randomizerD20()
        if ( this.rng >= 7 ) {
            this.randomizerD12();
            combatLog.textContent = this.name + " prays to the Gods and heals themselves for " + (this.damage*this.rng + 1) + "hp";
        }
        
        nextPlayer()
    }
    constructor (name,health,damage, icon,rng) {
        super(name,health,damage,icon,rng);
        this.classID = 3;
    }
}
class thief extends character {
    thiefLight() {
        this.randomizerD20()
            if ( this.rng >= 6 && this.rng != 20) {
                this.randomizerD6();
                console.log(this.rng)
                combatLog.textContent = this.name + " hits with a sneaky stab, dealing " + (this.damage * this.rng + 1 )+ " damage to their opponent!";
            } else if (this.rng < 6) {
                combatLog.textContent = this.name + "'s dagger fails to find their target!";
            } else if (this.rng = 20) { 
                this.randomizerD6();
                console.log(this.rng)
                combatLog.textContent = this.name + " capitalizes on their opponent's inattention, their quick thrust is a critical hit and deals " + (this.damage * this.rng * 2 + 1 )+ " damage to their opponent!!!";
            } else {
                console.log('notworking')
            }
        nextPlayer()
    }
    thiefHeavy () {
        this.randomizerD20()
        console.log("Thief rolled a " + this.rng)
            if ( this.rng >= 12 && this.rng != 20) {
                this.randomizerD12();
                console.log("Thief rolled a " + this.rng)
                combatLog.textContent = this.name + " stabs their target with a rapid flurry of blows, dealing " + (this.damage * this.rng + 3 )+ " damage to their opponent!";
            } else if (this.rng < 12) {
                combatLog.textContent = this.name + " loses balance when preparing to attack, and fails to seize the initiative!";
            } else if (this.rng = 20) { 
                this.randomizerD12();
                console.log("Thief rolled a " + this.rng)
                combatLog.textContent = this.name + " overwhelms their oppenent with a precise flurry of blows, and critically hits with a heavy attack for " + (this.damage * this.rng * 2 + 3) + " damage to their opponent!!!";
            } else {
                console.log('notworking2')
            }
        nextPlayer()
        }
    thiefSpecial() {
        this.randomizerD20()
        if ( this.rng >= 10 && this.rng != 20) {
            this.randomizerD6();
            combatLog.textContent = this.name + " steals his oponent's vitality through vampiric magics, dealing " + (this.damage * this.rng + 1 )+ " damage to their opponent and healing for the same amount!";
        } else if (this.rng < 10) {
            combatLog.textContent = this.name + " misses their Steal Health!";
        } else if (this.rng = 20) { 
            this.randomizerD4();
            combatLog.textContent = this.name + " drains the life out of his opponent with strong vampiric magics, dealing" + (this.damage * this.rng * 2 + 1 )+ " to their opponent and healing for the same amount!!!";
        } else {
            console.log('notworking3')
        }
        nextPlayer()
    }
    constructor (name,health,damage, icon,rng) {
        super(name,health,damage,icon,rng);
        this.classID = 4;
    }

}
// Character creation

const Cleric = new cleric ("Odin", 10 , 1, "placeholder", 0);
const Fighter = new fighter ("Sir Theodryn", 25, 1, "placeholder", 0);
const Mage = new mage ("Crazy Melody", 15, 1, "placeholder", 0);
const Thief = new thief ("Hendrick", 15, 1, "placeholder", 0);


// BIG BRAIN STRATS FOR STREAMLINING OF THE ATTACK CODE THAT ALLOWS CREATION OF MULTIPLE CHARACTERS AND EASY INTEGRATION
// Create a massive function that incorporates all of the attack functions
// have it run the characterclass ID as argument
// run a bunch of conditionals that will run the attack functions based on ID
// setup event listeners that can vary based on ID
// ???
// PROFIT

function actionSelector (active,classID, actionID) {
    if (activePlayer !== active) {
        return alert("Only the active Player can attack!");
    }
    
    // data-String data-Class = class.id
    // data set element
    if (classID == 0) {
        if (actionID === 1) {
            this.attack1()
        } else if (actionID === 2) {
            this.attack2()
        } else if (actionID === 3) {
            this.attack3()
        } else {
            console.log('error, not a valid action id')
        }
    } else if (classID == 1) {

        if (actionID === 1) {
            Fighter.fighterLight()
        } else if (actionID === 2) {
            Fighter.fighterHeavy()
        } else if (actionID === 3) {
            Fighter.fighterSpecial()
        } else {
            console.log('error, not a valid action id')
        }
    } else if (classID == 2) {

        if (actionID === 1) {
            Mage.mageLight()
        } else if (actionID === 2) {
            Mage.mageHeavy()
        } else if (actionID === 3) {
            Mage.mageSpecial()
        } else {
            console.log('error, not a valid action id')
        }
    } else if (classID == 3) {

        if (actionID === 1) {
            Cleric.clericLight()
        } else if (actionID === 2) {
            Cleric.clericHeavy()
        } else if (actionID === 3) {
            Cleric.clericSpecial()    
        } else {
            console.log('error, not a valid action id')
        }
    } else if (classID == 4) {

        if (actionID === 1) {
            Thief.thiefLight()
        } else if (actionID === 2) {
            Thief.thiefHeavy()
        } else if (actionID === 3) {
            Thief.thiefSpecial()
        } else {
            console.log('error, not a valid action id')
        }
    } else {
        console.log('error, not a valid class id')
    }
}



// Button mapping -- screen changers

document.getElementById('bStart').addEventListener('click', () => {
    document.getElementById('battleScreen').style.display =  "block";
    document.getElementById('selectScreen').style.display = "none";
    nextPlayer()
});


document.getElementById('bEnd').addEventListener('click', () => {
    document.getElementById('battleScreen').style.display =  "none";
    document.getElementById('selectScreen').style.display = "block";
    resetCharacters();
    nextPlayer();
});

//end button moves back the selected characters to the character select screen
function resetCharacters(){
    characterSelect.appendChild(fighterID);
    characterSelect.appendChild(mageID);
    characterSelect.appendChild(clericID);
    characterSelect.appendChild(thiefID);
}
//switching players

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('pTracker0').textContent = "Player 1's turn";
    document.getElementById('pTracker1').textContent = "Player 2's turn";
    console.log(activePlayer)
    document.querySelector('.playerTracker0').classList.toggle('active');
    document.querySelector('.playerTracker1').classList.toggle('active');
}
// Character selection mapping
function moveChar(charID){
    if (activePlayer === 0) {    // want to make it so that the conditional includes an and && that checks if charID is already a child of character 0 or 1
        character0.appendChild(charID);
    }
    else if (activePlayer === 1) {
        character1.appendChild(charID)
    }
}
function setCharID (charID) {
    if (activePlayer === 0) {
        player0Char = document.getElementById(charID)
        player0Char.dataset.classid 
    } else if (activePlayer ===1) {
        player1Char = document.getElementById(charID)
        player1Char.dataset.classid 
    }
}
document.getElementById('fighterID').addEventListener('click', () => {
    moveChar(fighterID);
    setCharID('fighterID');
    nextPlayer();
})

document.getElementById('mageID').addEventListener('click', () => {
    moveChar(mageID);
    setCharID('mageID');
    nextPlayer();
})

document.getElementById('clericID').addEventListener('click', () => {
    moveChar(clericID);
    setCharID('clericID');
    nextPlayer();
})

document.getElementById('thiefID').addEventListener('click', () => {
    moveChar(thiefID);
    setCharID('thiefID');
    nextPlayer();
})

//I want to figure out how to use an element's ID to pass inside a funtion's argument


// event listeners for player attacks
//player 0
// look at creating a single event listener and then event.target property

    document.getElementById('p0Atk1').addEventListener('click' , () => {
        //data
        actionSelector(0,player0Char.dataset.classid,1)
    });

    document.getElementById('p0Atk2').addEventListener('click' , () => {
        actionSelector(0,player0Char.dataset.classid,2)
    });

    document.getElementById('p0Atk3').addEventListener('click' , () => {
        actionSelector(0,player0Char.dataset.classid,3)
    });

//player 1
    document.getElementById('p1Atk1').addEventListener('click' , () => {
        actionSelector(1,player1Char.dataset.classid,1)
    });

    document.getElementById('p1Atk2').addEventListener('click' , () => {
        actionSelector(1,player1Char.dataset.classid,2)
    });

    document.getElementById('p1Atk3').addEventListener('click' , () => {
        actionSelector(1,player1Char.dataset.classid,3)
    });


/* 
things to figure out: 
-maybe figure out how to make event listener more DRY
-potentially create new img objects via JS rather than hardcode them in HTML
-what to do with combat logging
-fleshing out actions to have real impact
-figure out if changing bits of functions is a thing
*/