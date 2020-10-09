# CombatSim: Pusheen Power Clash!

Pusheen Power Clash is a cute, Old School RPG/Pokemon inspired and Dungeons and Dragons flavored Combat Sim that pits some cute characters in a battle to the death!

### Motivation

I've always been a gamer and big fan of RolePlayingGames, including tabletop games such as DnD and Pathfinder. This adorable game is a love letter to that retro-style turn based combat, and a small jab at the often overlooked brutality of Pokemon. As my first big project since joining the General Assembly SEI bootcamp, I couldn't miss the opportunity to return to my roots and create a game both lighthearted and action-based. 

### Screenshots

![Game1](https://github.com/TeddySpaghet/CombatSim/blob/main/assets/PusheenGame1.png)
![Game2](https://github.com/TeddySpaghet/CombatSim/blob/main/assets/PusheenGame2.png)
![Game3](https://github.com/TeddySpaghet/CombatSim/blob/main/assets/PusheenGame3.png)

### User Stories & Wireframes

To play the game, each player first selects a character. They then press the "Battle Start!" button and are taken into the battle screen. Each player then takes turns selecting the action they want, which serve to either damage their opponent or heal themselves (or both!). Once a player's character is dead, the remaining player is congratulated for winning the round and their score increases. At any point during or after the battle, the players have the option to click the "Start Over!" to return to the title screen and to choose different characters or start the fight anew.

![WireFrame](https://github.com/TeddySpaghet/CombatSim/blob/main/assets/project1WireFrame.png)

### Technologies & Code Snippets

Languages used: html, css, js

I created classes for each character that extend on the basic character class, helping to streamline the basic properties and functionalities needed for the action functions to work.

![Classes](https://github.com/TeddySpaghet/CombatSim/blob/main/assets/P1code1.png)

This action selector function takes in the value of the player you want to be able to complete the action with, the ID of the Class they're using, and the value of the attackID you want to run, and allows for easy expansion of the interface in the future. This dynamic approach keeps everything organized into an easily troubleshot environment.

![Dynamic action selector](https://github.com/TeddySpaghet/CombatSim/blob/main/assets/P1code2.png)

The event listener attached to the characters is where most of the behind the scene functionality occurs, assigning values to each character element that can be referred to in order to dynamically display and access the specific actions you want for each character.

![Event listener](https://github.com/TeddySpaghet/CombatSim/blob/main/assets/P1code3.png)

### Credits

[Everything to do with dataset](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)

Helped in making this program able to replay infinitely. [Removechild](https://www.w3schools.com/jsref/met_node_removechild.asp)

### Future Development

After reformatting the code for better performance and readability, I plan to implement popup boxes when hovering above the characters and their actions which will act as descriptors. I also plan to implement an imput field where you can name your Pusheens to allow for an even more engaging user experience. Furthermore, I will implement deeper mechanics with the use of a turn timer, notably statuses such as damage over time as well as buffs and debuffs.
