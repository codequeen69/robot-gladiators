//function to set name
var getPlayerName = function(){
    var name ="";
//while loop
while (name==="" || name=== null){
    name = prompt ("What is your robot's name?");
}//end while loop
console.log("Your robot's name is " + name);
return name;
};
// Global Variables
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if(this.money >= 7){
            window.alert ("Refill player's health by 20 for 7 dollar");
        this.health += 20;
        this.money -= 7;
        }
        else{
            window.alert("YOu don't have enough money!");
        }
    }, //comma!
    upgradeAttack: function(){
        if(this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
        }
        else{
            window.alert("You don't have enought money!");
        }
    }
};
//function to generate a random numeric value
var randomNumber = function(min,max){
    var value = Math.floor(Math.random()* (max - min +1)) + min;
    return value;
}
var fightOrSkip = function(){
    //ask player if they would like to fight or skip using the fightOrSkip function
    var promptFight = window.prompt("Would you like to FIGHT or Skip this battle? Enter FIGHT or SKIP to choose.");

    //conditional recursive function call
    if (promptFight === "" || promptFight === null){
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    //If player picks "SKIP" confirm and then stop the loop
    promptFight= promptFight.toLowerCase();
    if(promptFight==="skip"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip){
            window.alert(playerInfo.name +" has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping but don't let them go into the negative
            playerInfo.money = Math.max(0, playerInfo.money - 10);
          //return true if player wants to leave
          return true;
        }
    }
    return false;
};
var fight = function(enemy) {
    // repeat and execute as long as the enemy-robot is alive
    while (playerInfo.health > 0 && enemy.health > 0 ){
        //ask player if they'd like to fight or skip using fightOrSkip function
        if (fightOrSkip()){
            //if true,leave fight by breaking loop
            break;
        }
    //Generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max (0, enemy.health - damage);
    console.log(
        playerInfo.name + " attacked " + enemy.name + " . " + enemy.name + " now has " + enemy.health + " health remaining."
    );
    // Check enemy's health
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        break;
    }
    else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
    // Generate ransom damage value based on enemy attack power
    var damage = randomNumber (enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max (playerInfo.health - damage);
    console.log(
    enemy.name + " attacked " + playerInfo.name + "." +  playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );
    
    // check player's health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
    }
    else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left."); 
    }
}//end while loop
};//end of fight function

    // function to start a new game
    var startGame = function(){
        //reset player stats
     playerInfo.reset();
for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
        //let player know what round they are in, remember that arrays start at 0 soit need to have 1 added to it
        window.alert("Welcome Robot Gladiators! Round " + (i + 1));
    //pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyObj= enemyInfo[i];

    //reset enemyHealth before starting new fight
    pickedEnemyObj.health = randomNumber(40, 60);
    //pass the pickedEnemyName variable's value into the fight function wehere it will assue the value of the enemyName parameter
    fight (pickedEnemyObj);
    }

    //if we're not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length -1){
        //ask if player wants to use the store before next round
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        //if yes, take them to the store() function
        if (storeConfirm){
            shop();
        }
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}
    //after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};
        
//function to end the entire game
var endGame = function(){
    //if player is still alive, player wins!
    if (playerInfo.health > 0){
    window.alert("Great job, you've survived the game! You now have a score of" + playerInfo.money + ".");
    }
    else{
        window.alert("You've lost your robot in battle.");
    }
    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm ("Would you like to play again?");

    if (playAgainConfirm){
    //restart the game
    startGame();
    }   
    else {
    window.alert ("Thank you for playing Robot Gladiators! Come back soon!");
    }
    };
    var shop = function (){
        //ask the player what they'd like to do
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please endter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice"
        );
        //use switch to carry out action
        switch (shopOptionPrompt){
        case "REFILL": //new case
        case "refill":
            playerInfo.refillHealth();
        break;

        case "UPGRADE": //new case
        case "upgrade":
            playerInfo.upgradeAttack();
        break;

        case "LEAVE": //new case
        case "leave":
            window.alert("Leaving the store.");
            //do nothing so function will end
            break;
            
        default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop() again to force player to pick a valid option
            shop();
            break;
        }
    };
    var enemyInfo = [
        {
            name: "Roborto",
            attack: randomNumber(10, 14)
        },
        {
            name: "Amy Android",
            attack: randomNumber (10, 14)
        },
        {
            name:"Robo Trumble",
            attack: randomNumber (10, 14)
        }
    ];
startGame();
