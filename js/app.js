console.log("sanitycheck")

/* 
Class for characters that helps keep code dry.
Properties for characters should be : name, health, damage, icon, atk1, atk2, atk3
attack1 and attack2 should be a low dmg, high % chance to hit and high dmd, lower % chance to hit.
attack3 should be a unique ability flavored to the character
I should probably have an RNG function in the global context that can be called by each attack that needs it
*/

//define global game variables

let activePlayer, gamePlaying, player0Char, player1Char, combatLog, player0Class, player1Class
activePlayer = 0;
combatLog = document.querySelector('#combatlog');
atkLog = document.querySelector('#atklog');
console.log(combatLog);

// Assigning player healthbars

function hpTracker () {
    if (activePlayer === 0) {
        hpLog0 = document.querySelector('.healthbar0');
        hpLog0.textContent = player0Char.health + " / " + player0Char.maxHealth + " HP";
    } else if (activePlayer === 1) {
        hpLog1 = document.querySelector('.healthbar1');
        hpLog1.textContent = player1Char.health + " / " + player1Char.maxHealth + " HP";
    }
}

function hpLogger(player, hpLog) {
    if (activePlayer=== 0) {
        hpLog0 = document.querySelector('.healthbar0');
        hpLog.textContent = player.health + " / " + player.maxHealth + " HP";
    } else if (activePlayer === 1) {
        hpLog1 = document.querySelector('.healthbar1');
    hpLog.textContent = player.health + " / " + player.maxHealth + " HP";
    }
}

// function to end the game
function endGame (){
    if (player0Char.health <= 0 ) {
        document.getElementById('victory').style.display =  "block";
        document.getElementById('victory').innerText = player1Char.name + " is the winner!";
            if (player0Char.classID === 1) {
                document.getElementById('fighterID').src = "assets/deadpusheen.png";
            } else if (player0Char.classID === 2) {
                document.getElementById('mageID').src = "assets/deadpusheen.png";
            } else if (player0Char.classID === 3) {
                document.getElementById('clericID').src = "assets/deadpusheen.png";
            } else if (player0Char.classID === 4) {
                document.getElementById('thiefID').src = "assets/deadpusheen.png";
            }
        
    } else if (player1Char.health <= 0) {
        document.getElementById('victory').style.display =  "block";
        document.getElementById('victory').innerText = player0Char.name + " is the winner!";
        if (player1Char.classID === 1) {
            document.getElementById('fighterID').src = "assets/deadpusheen.png";
        } else if (player1Char.classID === 2) {
            document.getElementById('mageID').src = "assets/deadpusheen.png";
        } else if (player1Char.classID === 3) {
            document.getElementById('clericID').src = "assets/deadpusheen.png";
        } else if (player1Char.classID === 4) {
            document.getElementById('thiefID').src = "assets/deadpusheen.png";
        }
    }
}
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
    
    constructor (name, health, maxHealth, damage, icon, rng) {    // need to figure out how to add the clasID to the extended classes
        this.name = name;  
        this.health = health;
        this.maxHealth = maxHealth;
        this.damage = damage;
        this.icon = icon;
        this.rng = rng;
        this.player = "";
    }
}

// special class addition, adding a special ability flavored to specific class

class fighter extends character {
    fighterLight(player, hpLog) {
                this.randomizerD20()
                if ( this.rng >= 6 && this.rng != 20) {
                    this.randomizerD6();
                    console.log(this.rng)
                    combatLog.textContent = this.name + " hits with a quick thrust, dealing " + (this.damage * this.rng + 1 )+ " damage to their opponent!";
                    player.health = player.health - (this.damage * this.rng + 1 );
                    hpLogger(player, hpLog);
                } else if (this.rng < 6) {
                    combatLog.textContent = this.name + "'s blade fails to find their target!";
                } else if (this.rng = 20) { 
                    this.randomizerD6();
                    console.log(this.rng)
                    combatLog.textContent = this.name + " capitalizes on their opponent's inattention, their quick thrust is a critical hit and deals " + (this.damage * this.rng * 2 + 1 )+ " damage!!!";
                    player.health = player.health - (this.damage * this.rng * 2 + 1 );
                    hpLogger(player, hpLog);
                } else {
                    console.log('notworking')
                }
            nextPlayer()
    }
    fighterHeavy (player, hpLog) {
            this.randomizerD20()
            console.log("Fighter rolled a " + this.rng)
                if ( this.rng >= 12 && this.rng != 20) {
                    this.randomizerD12();
                    console.log("Fighter rolled a " + this.rng)
                    combatLog.textContent = this.name + " manages to rend their foe with an overhead strike dealing " + (this.damage * this.rng + 3 )+ " damage!";
                    player.health = player.health - (this.damage * this.rng + 3 );
                    hpLogger(player, hpLog);
                } else if (this.rng < 12) {
                    combatLog.textContent = this.name + " loses balance when preparing to attack, and fails to seize the initiative!";
                } else if (this.rng = 20) { 
                    this.randomizerD12();
                    console.log("Fighter rolled a " + this.rng)
                    combatLog.textContent = this.name + " carves their sword deep into their foe with an overhead strike, and critically hits with a heavy attack for " + (this.damage * this.rng * 2 + 3) + " damage!!!";
                    player.health = player.health - (this.damage * this.rng * 2 + 3);
                    hpLogger(player, hpLog);
                } else {
                    console.log('notworking2')
                }
            nextPlayer()

        }
    fighterSpecial(player, hpLog) { 
            this.randomizerD20()
            if ( this.rng >= 10 && this.rng < 18) {
                this.randomizerD10();
                console.log("Fighter rolled a " + this.rng);
                combatLog.textContent = this.name + " hits with a Swing and Punch combo, dealing " + (this.damage * this.rng + 3 )+ " damage to their opponent!";
                player.health = player.health - (this.damage * this.rng + 3 );
                hpLogger(player, hpLog);
            } else if (this.rng < 10) {
                combatLog.textContent = this.name + " is unable to connect their Swing and Punch combo!";
            } else if (this.rng >= 18) { 
                this.randomizerD10();
                console.log(this.rng);
                combatLog.textContent = this.name + " critically hits with their Swing and Punch combo, dealing " + (this.damage * this.rng * 2 + 3 ) + " damage and sending their opponent flying!!!";
                player.health = player.health - (this.damage * this.rng * 2 + 3);
                hpLogger(player, hpLog);
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
    mageLight(player, hpLog) {
            this.randomizerD20()
                if ( this.rng >= 6 && this.rng != 20) {
                    this.randomizerD6();
                    console.log(this.rng)
                    combatLog.textContent = this.name + " sends a firebolt flying at their foe, dealing " + (this.damage * this.rng + 1 )+ " damage!";
                    player.health = player.health - (this.damage * this.rng + 1 );
                    hpLogger(player, hpLog);
                } else if (this.rng < 6) {
                    combatLog.textContent = this.name + " is unable to concentrate on their spell!";
                } else if (this.rng = 20) { 
                    this.randomizerD6();
                    console.log(this.rng)
                    combatLog.textContent = this.name + " sends their foe reeling with pain, their firebolt is a critical hit and deals " + (this.damage * this.rng * 2 + 1 )+ " damage!!!";
                    player.health = player.health - (this.damage * this.rng * 2 + 1 );
                    hpLogger(player, hpLog);
                } else {
                    console.log('notworking')
                }
            nextPlayer()

    }
    mageHeavy (player, hpLog) {
        this.randomizerD20()
            console.log("Mage rolled a " + this.rng)
                if ( this.rng >= 12 && this.rng != 20) {
                    this.randomizerD12();
                    console.log("Mage rolled a " + this.rng)
                    combatLog.textContent = this.name + " conjures a powerful fireblast, dealing " + (this.damage * this.rng + 3 )+ " damage to their opponent!";
                    player.health = player.health - (this.damage * this.rng + 3 );
                    hpLogger(player, hpLog);
                } else if (this.rng < 12) {
                    combatLog.textContent = this.name + "'s casting of their spell fizzles out, leaving them open to attack!";
                } else if (this.rng = 20) { 
                    this.randomizerD12();
                    console.log("Mage rolled a " + this.rng)
                    combatLog.textContent = this.name + " summons a huge burst of flames, and critically hits with fireblast for " + (this.damage * this.rng * 2 + 3) + " damage to their opponent!!!";
                    player.health = player.health - (this.damage * this.rng * 2 + 3);
                    hpLogger(player, hpLog);
                } else {
                    console.log('notworking2')
                }
            nextPlayer();

        }
    mageSpecial(player, hpLog) {
            this.randomizerD20()
            console.log(this.rng)
            if ( this.rng >= 9 && this.rng <18) {
                this.randomizerD4();
                combatLog.textContent = this.name + " hits with two magic missles dealing " + ((this.damage * this.rng + 1) * 2 )+ " damage to their opponent!";
                player.health = player.health - ((this.damage * this.rng + 1) * 2 );
                hpLogger(player, hpLog);
            } else if (this.rng < 9) {
                this.randomizerD4();
                combatLog.textContent = this.name + " hits with one magic missle dealing " + (this.damage * this.rng + 1 )+ " damage to their opponent!";
                player.health = player.health - ((this.damage * this.rng + 1) * 1 );
                hpLogger(player, hpLog);
            } else if (this.rng >= 18) { 
                this.randomizerD4();
                combatLog.textContent = this.name + " hits with all three magic missle dealing " + ((this.damage * this.rng + 1) * 3 )+ " damage to their opponent!!!";
                player.health = player.health - ((this.damage * this.rng + 1) * 3 );
                hpLogger(player, hpLog);
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
    clericLight(player, hpLog) {
            this.randomizerD20()
                if ( this.rng >= 6 && this.rng != 20) {
                    this.randomizerD6();
                    console.log(this.rng)
                    combatLog.textContent = this.name + " slams their opponent with their mace, dealing " + (this.damage * this.rng + 1 )+ " damage!";
                    player.health = player.health - (this.damage * this.rng + 1 );
                    hpLogger(player, hpLog);
                } else if (this.rng < 6) {
                    combatLog.textContent = this.name + "'s mace fails to find their target!";
                } else if (this.rng = 20) { 
                    this.randomizerD6();
                    console.log(this.rng)
                    combatLog.textContent = this.name + " bashes their opponent in the head, critically hitting and dealing " + (this.damage * this.rng * 2 + 1 )+ " damage!!!";
                    player.health = player.health - (this.damage * this.rng * 2 + 1 );
                    hpLogger(player, hpLog);
                } else {
                    console.log('notworking')
                }
            nextPlayer();

    }
    clericHeavy (player, hpLog) {
            this.randomizerD20()
            console.log("Cleric rolled a " + this.rng)
                if ( this.rng >= 12 && this.rng != 20) {
                    this.randomizerD12();
                    console.log("Cleric rolled a " + this.rng)
                    combatLog.textContent = this.name + "'s mace begins to glow with divine light before stricking their opponent, dealing " + (this.damage * this.rng + 3 )+ " damage!";
                    player.health = player.health - (this.damage * this.rng + 3 );
                    hpLogger(player, hpLog);
                } else if (this.rng < 12) {
                    combatLog.textContent = this.name + " is unable to muster any divine power!";
                } else if (this.rng = 20) { 
                    this.randomizerD12();
                    console.log("Cleric rolled a " + this.rng)
                    combatLog.textContent = this.name + " bursts with holy power, bashing their opponent and critically hitting dealing " + (this.damage * this.rng * 2 + 3) + " damage!!!";
                    player.health = player.health - (this.damage * this.rng * 2 + 3);
                    hpLogger(player, hpLog);
                } else {
                    console.log('notworking2')
                }
            nextPlayer();

        }
    clericSpecial(player, hpLog) {
            this.randomizerD20()
            if ( this.rng >= 9 ) {
                this.randomizerD12();
                combatLog.textContent = this.name + " prays to the Gods and heals themselves for " + (this.damage*this.rng + 1) + " hp";
                player.health = player.health + (this.damage*this.rng + 1);
                hpLogger(player, hpLog);
            } else {
                combatLog.textContent = this.name + " tried to cast a spell, but their prayer fell on deaf ears!";
            } 
            nextPlayer();
        }
    constructor (name,health,damage, icon,rng) {
        super(name,health,damage,icon,rng);
        this.classID = 3;
    }
}
class thief extends character {
    thiefLight(player, hpLog) {
            this.randomizerD20()
                if ( this.rng >= 6 && this.rng != 20) {
                    this.randomizerD6();
                    console.log(this.rng)
                    combatLog.textContent = this.name + " hits with a sneaky stab, dealing " + (this.damage * this.rng + 1 )+ " damage to their opponent!";
                    player.health = player.health - (this.damage * this.rng + 1 );
                    hpLogger(player, hpLog);
                } else if (this.rng < 6) {
                    combatLog.textContent = this.name + "'s dagger fails to find their target!";
                } else if (this.rng = 20) { 
                    this.randomizerD6();
                    console.log(this.rng)
                    combatLog.textContent = this.name + " capitalizes on their opponent's inattention, their quick thrust is a critical hit and deals " + (this.damage * this.rng * 2 + 1 )+ " damage to their opponent!!!";
                    player.health = player.health - (this.damage * this.rng * 2 + 1 );
                    hpLogger(player, hpLog);
                } else {
                    console.log('notworking')
                }
            nextPlayer();

    }
    thiefHeavy (player, hpLog) {
            this.randomizerD20()
            console.log("Thief rolled a " + this.rng)
                if ( this.rng >= 12 && this.rng != 20) {
                    this.randomizerD12();
                    console.log("Thief rolled a " + this.rng)
                    combatLog.textContent = this.name + " stabs their target with a rapid flurry of blows, dealing " + (this.damage * this.rng + 3 )+ " damage to their opponent!";
                    player.health = player.health - (this.damage * this.rng + 3 );
                    hpLogger(player, hpLog);
                } else if (this.rng < 12) {
                    combatLog.textContent = this.name + " attempts a daring maneuver, but steps on their tail and trips!";
                } else if (this.rng = 20) { 
                    this.randomizerD12();
                    console.log("Thief rolled a " + this.rng)
                    combatLog.textContent = this.name + " overwhelms their oppenent with a precise flurry of blows, and critically hits with a heavy attack for " + (this.damage * this.rng * 2 + 3) + " damage to their opponent!!!";
                    player.health = player.health - (this.damage * this.rng * 2 + 3);
                    hpLogger(player, hpLog);
                } else {
                    console.log('notworking2')
                }
            nextPlayer();
            }
    thiefSpecial(player, hpLog, opPlayer, opHpLog) {
        this.randomizerD20()
        if ( this.rng >= 10 && this.rng != 20) {
                this.randomizerD4();
                combatLog.textContent = this.name + " steals his oponent's vitality through vampiric magics, dealing " + ((this.damage * this.rng) + 1 )+ " damage to their opponent and healing for the same amount!";
                player.health = player.health - (this.damage * this.rng + 1 );
                opPlayer.health = opPlayer.health + (this.damage * this.rng + 1 );
                console.log(((player.damage * player.rng) + 1) + "damage");
                console.log(opPlayer);
                hpLogger(player, hpLog);
                hpLogger(opPlayer, opHpLog);
            } else if (this.rng < 10) {
                combatLog.textContent = this.name + " misses their Steal Health!";
            } else if (this.rng = 20) { 
                this.randomizerD4();
                player.health = player.health - ((this.damage * this.rng * 2) + 1 );
                combatLog.textContent = this.name + " drains the life out of his opponent with strong vampiric magics, dealing" + (this.damage * this.rng * 2 + 1 )+ " to their opponent and healing for the same amount!!!";
                opPlayer.health = opPlayer.health + ((this.damage * this.rng * 2) + 1 );
                console.log(opPlayer);
                hpLogger(player, hpLog);
                hpLogger(opPlayer, opHpLog);
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

const Cleric = new cleric ("Odin", 40 , 40, 1, "assets/clericpusheen.png", 0);
const Fighter = new fighter ("Sir Theodryn", 45, 45, 1, "assets/warriorpusheen.png", 0);
const Mage = new mage ("Crazy Melody", 35, 35, 1, "assets/magepusheen.png", 0);
const Thief = new thief ("Hendrick", 35, 35, 1, "assets/thiefpusheenupdated.png", 0);


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
    if (activePlayer === 0) {
        if (classID == 0) {
            if (actionID === 1) {
                this.attack1(player1Char)
                return
            } else if (actionID === 2) {
                this.attack2(player1Char)
                return
            } else if (actionID === 3) {
                this.attack3(player1Char)
                return
            } else {
                console.log('error, not a valid action id')
                return
            }
        } else if (classID == 1) {
            if (actionID === 1) {
                Fighter.fighterLight(player1Char, hpLog1)
                endGame()
                return
            } else if (actionID === 2) {
                Fighter.fighterHeavy(player1Char, hpLog1)
                endGame()
                return
            } else if (actionID === 3) {
                Fighter.fighterSpecial(player1Char, hpLog1)
                endGame()
                return
            } else {
                console.log('error, not a valid action id')
                return
            }
        } else if (classID == 2) {
            if (actionID === 1) {
                Mage.mageLight(player1Char, hpLog1)
                endGame()
                return
            } else if (actionID === 2) {
                Mage.mageHeavy(player1Char, hpLog1)
                endGame()
                return
            } else if (actionID === 3) {
                Mage.mageSpecial(player1Char, hpLog1)
                endGame()
                return
            } else {
                console.log('error, not a valid action id')
                return
            }
        } else if (classID == 3) {
            if (actionID === 1) {
                Cleric.clericLight(player1Char, hpLog1)
                endGame()
                return
            } else if (actionID === 2) {
                Cleric.clericHeavy(player1Char, hpLog1)
                endGame()
                return
            } else if (actionID === 3) {
                Cleric.clericSpecial(player0Char, hpLog0)
                endGame()
                return    
            } else {
                console.log('error, not a valid action id')
            }
        } else if (classID == 4) {
            if (actionID === 1) {
                Thief.thiefLight(player1Char, hpLog1)
                endGame()
                return
            } else if (actionID === 2) {
                Thief.thiefHeavy(player1Char, hpLog1)
                endGame()
                return
            } else if (actionID === 3) {
                Thief.thiefSpecial(player1Char, hpLog1, player0Char, hpLog0)
                endGame()
                return
            } else {
                console.log('error, not a valid action id')
                return
            }
        } else {
            console.log('error, not a valid class id')
            return
        }
    }
    if (activePlayer === 1) {
        if (classID == 0) {
            if (actionID === 1) {
                this.attack1(player0Char, hpLog0)
                return
            } else if (actionID === 2) {
                this.attack2(player0Char, hpLog0)
                return
            } else if (actionID === 3) {
                this.attack3(player0Char, hpLog0)
                return
            } else {
                console.log('error, not a valid action id')
                return
            }
        } else if (classID == 1) {
            if (actionID === 1) {
                Fighter.fighterLight(player0Char, hpLog0)
                endGame()
                return
            } else if (actionID === 2) {
                Fighter.fighterHeavy(player0Char, hpLog0)
                endGame()
                return
            } else if (actionID === 3) {
                Fighter.fighterSpecial(player0Char, hpLog0)
                endGame()
                return
            } else {
                console.log('error, not a valid action id')
                return
            }
        } else if (classID == 2) {
            if (actionID === 1) {
                Mage.mageLight(player0Char, hpLog0)
                endGame()
                return
            } else if (actionID === 2) {
                Mage.mageHeavy(player0Char, hpLog0)
                endGame()
                return
            } else if (actionID === 3) {
                Mage.mageSpecial(player0Char, hpLog0)
                endGame()
                return
            } else {
                console.log('error, not a valid action id')
                return
            }
        } else if (classID == 3) {
            if (actionID === 1) {
                Cleric.clericLight(player0Char, hpLog0)
                endGame()
                return
            } else if (actionID === 2) {
                Cleric.clericHeavy(player0Char, hpLog0)
                endGame()
                return
            } else if (actionID === 3) {
                Cleric.clericSpecial(player1Char, hpLog1)
                endGame() 
                return   
            } else {
                console.log('error, not a valid action id')
                return
            }
        } else if (classID == 4) {
            if (actionID === 1) {
                Thief.thiefLight(player0Char, hpLog0)
                endGame()
                return
            } else if (actionID === 2) {
                Thief.thiefHeavy(player0Char, hpLog0)
                endGame()
                return
            } else if (actionID === 3) {
                Thief.thiefSpecial(player0Char, hpLog0, player1Char, hpLog1)
                endGame()
                return
            } else {
                console.log('error, not a valid action id')
                return
            }
        } else {
            console.log('error, not a valid class id')
            return
        }
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
    removeSelected();
    document.getElementById('fighterID').dataset.playerid = "";
    document.getElementById('mageID').dataset.playerid = "";
    document.getElementById('clericID').dataset.playerid = "";
    document.getElementById('thiefID').dataset.playerid = "";
    characterSelect.appendChild(fighterID);
    characterSelect.appendChild(mageID);
    characterSelect.appendChild(clericID);
    characterSelect.appendChild(thiefID);
    //reset health bars
    Fighter.health = Fighter.maxHealth;
    Mage.health = Mage.maxHealth;
    Cleric.health = Cleric.maxHealth;
    Thief.health = Thief.maxHealth;
    // reset logs
    combatLog.textContent = "Combat Log";
    atkLog.textContent = "Attack Log";
    // reset img src
    document.getElementById('fighterID').src = Fighter.icon;
    document.getElementById('mageID').src = Mage.icon;
    document.getElementById('clericID').src = Cleric.icon;
    document.getElementById('thiefID').src = Thief.icon;
    //reset event listeners 
    document.getElementById('fighterID').addEventListener('click', actionEvtListnr);
    document.getElementById('mageID').addEventListener('click', actionEvtListnr);
    document.getElementById('clericID').addEventListener('click', actionEvtListnr);
    document.getElementById('thiefID').addEventListener('click', actionEvtListnr);
    //hide victory message
    document.getElementById('victory').style.display =  "none";
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
    console.log(document.getElementById('character0').childNodes);
    if (activePlayer === 0 ) {    // want to make it so that the conditional includes an and && that checks if charID is already a child of character 0 or 1
        character0.appendChild(charID);
        console.log(document.getElementById('character0').childNodes);
    }
    else if (activePlayer === 1) {
        character1.appendChild(charID);
        console.log(document.getElementById('character1').childNodes);
    }
}
// Setting character IDs
function setCharID (charID) {
    if (activePlayer === 0) {
        player0Class = document.getElementById(charID);
        player0Class.dataset.classid;
    } else if (activePlayer ===1) {
        player1Class = document.getElementById(charID);
        player1Class.dataset.classid;
    }
}
// Assigning playerid
function assignPlayer(charID){
    if (activePlayer === 0) {    
        document.getElementById(charID).dataset.playerid = 0;
    }
    else if (activePlayer === 1) {
        document.getElementById(charID).dataset.playerid = 1;
    }
}
// Assigning player's chosen class
function assignCharClass(Class) {
    if (activePlayer === 0) {    
        Class.player = 0;
    }
    else if (activePlayer === 1) {
        Class.player = 1;
    }
}
// Assingning characters to the active player
function assignChar(Class){
    if (activePlayer === 0) {    
        player0Char = Object.assign(Class);
        console.log(player0Char);
    }
    else if (activePlayer === 1) {
        player1Char = Object.assign(Class);
        console.log(player1Char);
        console.log(typeof(player1Char.health));
        console.log(player1Char.name + " has " + player1Char.health + " hp.");
    } 
}


// Duplicate characters into the selectedCharacter div
    //change their ids so they don't conflict with the battle characters
function assignSelected (charID) {
    if (activePlayer === 0) {    
        let select0 = document.getElementById(charID);
        let clone0 = select0.cloneNode();
        clone0.id = "clone0";
        document.getElementById("selectedCharacter0").appendChild(clone0);
    }
    else if (activePlayer === 1) {
        let select1 = document.getElementById(charID);
        let clone1 = select1.cloneNode();
        clone1.id = "clone1";
        document.getElementById("selectedCharacter1").appendChild(clone1);
    }  
}

// Remove the character of the selectedCharacter div
function removeSelected () {
    removeSelect0 = document.getElementById("selectedCharacter0");
    console.log(document.getElementById("selectedCharacter0").childNodes);
    while (removeSelect0.hasChildNodes()) {
    removeSelect0.removeChild(removeSelect0.firstChild);
    } // thank google for this @ https://www.w3schools.com/jsref/met_node_removechild.asp
    removeSelect1 = document.getElementById("selectedCharacter1");
    while (removeSelect1.hasChildNodes()) {
        removeSelect1.removeChild(removeSelect1.firstChild);
        }
}

//Event listeners for character select
//test func
// change elID to event.target
function actionEvtListnr(event) {
    // event target gives element clicked
    element = event.target
    console.log("this is a " + element.dataset.classid);
    console.log(document.getElementById('character0').childNodes);
    console.log(document.getElementById('character1').childNodes);
    if (document.getElementById('character0').childNodes.length == 5 || document.getElementById('character1').childNodes.length == 5) {
        if (element.dataset.classid == 1) {
            moveChar(fighterID);
            assignSelected('fighterID');
            setCharID('fighterID');
            assignPlayer('fighterID');
            assignCharClass(Fighter);
            changeActionBox("(Fighter)");
            assignChar(Fighter);
        } else if (element.dataset.classid == 2) {
            moveChar(mageID);
            assignSelected('mageID');
            setCharID('mageID');
            assignPlayer('mageID');
            assignCharClass(Mage);
            changeActionBox("(Mage)");
            assignChar(Mage);
        } else if (element.dataset.classid == 3) {
            moveChar(clericID);
            assignSelected('clericID');
            setCharID('clericID');
            assignPlayer('clericID');
            assignCharClass(Cleric);
            changeActionBox("(cleric)");
            assignChar(Cleric);
        } else if (element.dataset.classid == 4) {
            moveChar(thiefID);
            assignSelected('thiefID');
            setCharID('thiefID');
            assignPlayer('thiefID');
            assignCharClass(Thief);
            changeActionBox("(thief)");
            assignChar(Thief);   
        }
        hpTracker();
        nextPlayer();
        element.removeEventListener('click', actionEvtListnr);
    } else {
        return alert('You have already selected a character!');
    }
} 
//actionEvtListnr('fighterID');

document.getElementById('fighterID').addEventListener('click', actionEvtListnr);
document.getElementById('mageID').addEventListener('click', actionEvtListnr);
document.getElementById('clericID').addEventListener('click', actionEvtListnr);
document.getElementById('thiefID').addEventListener('click', actionEvtListnr);



//Dynamically change the attack box's text to reflect character class
function changeActionBox (Class) {
    if (activePlayer === 0) {
        document.getElementById('p0Atk1').textContent = "Basic attack " + Class;
        document.getElementById('p0Atk2').textContent = "Heavy attack " + Class;
        document.getElementById('p0Atk3').textContent = "Special attack " + Class;
    } else if (activePlayer === 1) {
        document.getElementById('p1Atk1').textContent = "Basic attack " + Class;
        document.getElementById('p1Atk2').textContent = "Heavy attack " + Class;
        document.getElementById('p1Atk3').textContent = "Special attack " + Class;
    }
}



// event listeners for player attacks
//player 0
// look at creating a single event listener and then event.target property

    document.getElementById('p0Atk1').addEventListener('click' , () => {
        //data
        if ( player0Char.health > 0 && player1Char.health > 0) {
            actionSelector(0,player0Class.dataset.classid,1)
        }
    });

    document.getElementById('p0Atk2').addEventListener('click' , () => {
        if ( player0Char.health > 0 && player1Char.health > 0) {
            actionSelector(0,player0Class.dataset.classid,2)
        }
    });

    document.getElementById('p0Atk3').addEventListener('click' , () => {
        if ( player0Char.health > 0 && player1Char.health > 0) {
            actionSelector(0,player0Class.dataset.classid,3)
        }
    });

//player 1
    document.getElementById('p1Atk1').addEventListener('click' , () => {
        if ( player0Char.health > 0 && player1Char.health > 0) {
            actionSelector(1,player1Class.dataset.classid,1)
        }
    });

    document.getElementById('p1Atk2').addEventListener('click' , () => {
        if ( player0Char.health > 0 && player1Char.health > 0) {
            actionSelector(1,player1Class.dataset.classid,2)
        }
    });

    document.getElementById('p1Atk3').addEventListener('click' , () => {
        if ( player0Char.health > 0 && player1Char.health > 0) {
            actionSelector(1,player1Class.dataset.classid,3)
        }
    });


/* 
things to figure out: 
-maybe figure out how to make event listener more DRY
-potentially create new img objects via JS rather than hardcode them in HTML
-fleshing out actions to have real impact
-figure out if changing bits of functions is a thing

*/
//stretch goal set up action descriptor hover boxes
//hp implementation: give characters a max and current hp property
//character select button will reset the current hp to max hp 
// make the html healthbars dynamic by linking the character0.classID to it