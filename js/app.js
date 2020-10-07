console.log("sanitycheck")

/* 
Class for characters that helps keep code dry.
Properties for characters should be : name, health, damage, icon, atk1, atk2, atk3
attack1 and attack2 should be a low dmg, high % chance to hit and high dmd, lower % chance to hit.
attack3 should be a unique ability flavored to the character
I should probably have an RNG function in the global context that can be called by each attack that needs it
*/

//define global game variables

let activePlayer, gamePlaying, player0Char, player1Char
activePlayer = 0;


//base character creation and attribute allocation

class character {
    randomizerD20() {
        this.rng = (Math.floor(Math.random()* 20)+1);
    }
    randomizerD6() {
        this.rng = (Math.floor(Math.random()* 6)+1)
    }
    attack1 () {
        this.randomizerD20()
            if ( this.rng >= 6 && this.rng != 20) {
                this.randomizerD6();
                document.getElementById('log').textContent =  testChar.name + " hits with a light attack dealing " + this.damage * this.rng + " damage to their opponent!";
            } else if (this.rng < 6) {
                document.getElementById('log').textContent =  testChar.name + " misses their a light attack!";
            } else if (this.rng = 20) { 
                document.getElementById('log').textContent =  testChar.name + " critically hits with a light attack!!!";
            } else {
                console.log('notworking')
            }
            nextPlayer()
        }
    attack2 () {
        this.randomizerD20()
            if ( this.rng >= 12 && this.rng != 20) {
                document.getElementById('log').textContent =  testChar.name + " hits with a heavy attack!";
            } else if (this.rng < 12) {
                document.getElementById('log').textContent =  testChar.name + " misses their heavy attack!";
            } else if (this.rng = 20) { 
                document.getElementById('log').textContent =  testChar.name + " critically hits with a heavy attack!!!";
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
            document.getElementById('log').textContent =  testChar.name + " hits with a special attack!";
        } else if (this.rng < 10) {
            document.getElementById('log').textContent = testChar.name + " misses their special attack!";
        } else if (this.rng = 20) { 
            document.getElementById('log').textContent = testChar.name + " critically hits with a special attack!!!";
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
    fighterSpecial() {
        this.randomizerD20()
        if ( this.rng >= 10 && this.rng != 20) {
            document.getElementById('log').textContent =  testChar.name + " hits with Powerful Swing!";
        } else if (this.rng < 10) {
            document.getElementById('log').textContent = testChar.name + " misses their Powerful Swing!";
        } else if (this.rng >= 18) { 
            document.getElementById('log').textContent = testChar.name + " critically hits with Powerful Swing!!!";
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
    mageSpecial() {
        this.randomizerD20()
        if ( this.rng >= 10 && this.rng != 20) {
            document.getElementById('log').textContent =  testChar.name + " hits with fireball!";
        } else if (this.rng < 10) {
            document.getElementById('log').textContent = testChar.name + " misses their fireball!";
        } else if (this.rng = 20) { 
            document.getElementById('log').textContent = testChar.name + " critically hits with fireball!!!";
        } else {
            console.log('notworking3')
        }
        nextPlayer()
    }
    constructor (name,health,damage, icon,rng) {
        super(name,health,damage,icon,rng);
        this.classID = 2;
    }

}

class cleric extends character {
    clericSpecial() {
        this.randomizerD20()
        if ( this.rng >= 7 ) {
            this.randomizerD6();
            document.getElementById('log').textContent =  testChar.name + " prays to the Gods and heals themselves for " + this.damage*this.rng + "hp";
        }
        
        nextPlayer()
    }
    constructor (name,health,damage, icon,rng) {
        super(name,health,damage,icon,rng);
        this.classID = 3;
    }
}
class thief extends character {
    thiefSpecial() {
        this.randomizerD20()
        if ( this.rng >= 10 && this.rng != 20) {
            document.getElementById('log').textContent =  testChar.name + " hits with a Steal Health!";
        } else if (this.rng < 10) {
            document.getElementById('log').textContent = testChar.name + " misses their Steal Health!";
        } else if (this.rng = 20) { 
            document.getElementById('log').textContent = testChar.name + " critically hits with Steal Health!!!";
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
const Fighter = new fighter ("Hendrick", 25, 1, "placeholder", 0);
const Mage = new mage ("Melody", 15, 1, "placeholder", 0);
const Thief = new thief ("Theodryn", 15, 1, "placeholder", 0);


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
            testChar.attack1()
        } else if (actionID === 2) {
            testChar.attack2()
        } else if (actionID === 3) {
            testChar.attack3()
        } else {
            console.log('error, not a valid action id')
        }
    } else if (classID == 1) {

        if (actionID === 1) {

        } else if (actionID === 2) {

        } else if (actionID === 3) {
            Fighter.fighterSpecial()
        } else {
            console.log('error, not a valid action id')
        }
    } else if (classID == 2) {

        if (actionID === 1) {

        } else if (actionID === 2) {

        } else if (actionID === 3) {
            Mage.mageSpecial()
        } else {
            console.log('error, not a valid action id')
        }
    } else if (classID == 3) {

        if (actionID === 1) {
            Cleric.attack1()
        } else if (actionID === 2) {
            Cleric.attack2()
        } else if (actionID === 3) {
            Cleric.clericSpecial()    
        } else {
            console.log('error, not a valid action id')
        }
    } else if (classID == 4) {

        if (actionID === 1) {

        } else if (actionID === 2) {

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
    if (activePlayer === 0) {
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
-make a functioning player select
-what to do with combat logging
-how to attach player tags to the characters making it so actions can't be used for the wrong character
-fleshing out actions to have real impact
*/