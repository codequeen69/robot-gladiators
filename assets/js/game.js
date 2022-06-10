// Global Variables
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0 ){

    //Ask player if they would likje to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
     // if player chooses to skip
     if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
       window.alert(playerName + " has chosen to skip the fight! Goodbye!");
       //subtract money from playerMoney for skipping
       playerMoney = playerMoney - 10;
       console.log("playerMoney", playerMoney);
       break;
   }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
        // Remove player's health by subtracting the amount set in the enemyAttck variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
    enemyName + " attacked " + playerName + "." +  playerName + " now has " + playerHealth + " health remaining."
    );
    
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left."); 
    }
    }//end of while loop
  };//end of fight function

    // function to start a new game
    var startGame = function(){
        //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        //let player know what round they are in, remember that arrays start at 0 soit need to have 1 added to it
        window.alert("Welcome Robot Gladiators! Round " + (i + 1));
    
    //pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName= enemyNames[i];

    //reset enemyHealth before starting new fight
    enemyHealth = 50;

    //pass the pickedEnemyName variable's value into the fight function wehere it will assue the value of the enemyName parameter
    fight (pickedEnemyName);
    }

    //if we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length -1){
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
    if (playerHealth > 0){
    window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + ".");
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
            if(playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars");
        //increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money!");
            }
        break;

        case "UPGRADE": //new case
        case "upgrade":
            if (playerMoney >= 7){
            window.alert ("Upgrading player's attack by 6 for 7 dollars.");
        //increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
            }
            else{
                window.alert ("You don't have enough money!");
            }
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
startGame();

