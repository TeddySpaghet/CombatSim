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
player0Char = "cleric"
player1Char = "fighter"

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
const testCleric = new cleric ("Cleric", "10" , 1, "placeholder", 0)
console.log(testCleric);
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
    if (classID === 0) {
        if (actionID === 1) {
            testChar.attack1()
        } else if (actionID === 2) {
            testChar.attack2()
        } else if (actionID === 3) {
            testChar.attack3()
        } else {
            console.log('error, not a valid action id')
        }
    } else if (classID === 1) {

        if (actionID === 1) {

        } else if (actionID === 2) {

        } else if (actionID === 3) {
            
        } else {
            console.log('error, not a valid action id')
        }
    } else if (classID === 2) {

        if (actionID === 1) {

        } else if (actionID === 2) {

        } else if (actionID === 3) {
            
        } else {
            console.log('error, not a valid action id')
        }
    } else if (classID === 3) {

        if (actionID === 1) {

        } else if (actionID === 2) {

        } else if (actionID === 3) {
            
        } else {
            console.log('error, not a valid action id')
        }
    } else if (classID === 4) {

        if (actionID === 1) {

        } else if (actionID === 2) {

        } else if (actionID === 3) {
            
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
    nextPlayer()
});

//switching players

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('pTracker0').textContent = "Player 1's turn";
    document.getElementById('pTracker1').textContent = "Player 2's turn";
    console.log(activePlayer)
    document.querySelector('.playerTracker0').classList.toggle('active');
    document.querySelector('.playerTracker1').classList.toggle('active');
}

// event listeners for player attacks
//player 0

// try putting after the event listener

    document.getElementById('p0Atk1').addEventListener('click' , () => {
        actionSelector(0,0,3)
    });

    document.getElementById('p0Atk2').addEventListener('click' , () => {
        actionSelector(0,0,3)
    });

    document.getElementById('p0Atk3').addEventListener('click' , () => {
        actionSelector(0,0,3)
    });

//player 1
    document.getElementById('p1Atk1').addEventListener('click' , () => {
        testChar.attack1();
    });

    document.getElementById('p1Atk2').addEventListener('click' , () => {
        testChar.attack2();
    });

    document.getElementById('p1Atk3').addEventListener('click' , () => {
        testChar.attack3();
    });


/* 
things to figure out: 
-make a functioning player select
-what to do with combat logging
-how to attach player tags to the characters making it so actions can't be used for the wrong character
-fleshing out actions to have real impact
-add hp bars
*/