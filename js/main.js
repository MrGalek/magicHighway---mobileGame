/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland.             */
/* There should always be a javaScript file with the same name as the html file. */
/* This file always holds the playGame function().                               */
/* It also holds game specific code, which will be different for each game       */





/******************** Declare game specific global data and functions *****************/
/* images must be declared as global, so that they will load before the game starts  */
let scrollingBackgroundImage = new Image();
scrollingBackgroundImage.src = "images/background.png";

let player = new Image();
player.src = "images/sprite.png";

let bad1 = new Image();
bad1.src = "images/bad1.png";

let bad2 = new Image();
bad2.src = "images/bad2.png";

let bad3 = new Image();
bad3.src = "images/bad3.png";

/******************* END OF Declare game specific data and functions *****************/







/* Always have a playGame() function                                     */
/* However, the content of this function will be different for each game */
function playGame()
{
    /* We need to initialise the game objects outside of the Game class */
    /* This function does this initialisation.                          */
    /* This function will:                                              */
    /* 1. create the various game game gameObjects                   */
    /* 2. store the game gameObjects in an array                     */
    /* 3. create a new Game to display the game gameObjects          */
    /* 4. start the Game                                                */


    /* Create the various gameObjects for this game. */
    /* This is game specific code. It will be different for each game, as each game will have it own gameObjects */

    gameObjects[0] = new ScrollingBackgroundImage(scrollingBackgroundImage, 0,1);
    gameObjects[1] = new StaticImage(player,130,canvas.height-100,45,45,true);

    gameObjects[2] = new StaticImage(bad1,130,canvas.height-400,45,45,false);
    gameObjects[3] = new StaticImage(bad2,330,canvas.height-300,45,45,false);
    gameObjects[4] = new StaticImage(bad3,330,canvas.height-500,45,45,false);
    gameObjects[5] = new StaticImage(bad1,330,canvas.height-180,45,45,false);

    // make the canvas wider for this example
    document.getElementById("gameCanvas").style.width = "300px";
    /* END OF game specific code. */

    /* Always create a game that uses the gameObject array */
    let game = new CanvasGame();

    /* Always play the game */
    game.start();

    
    /* If they are needed, then include any game-specific mouse and keyboard listners */
}

function clickScreen(){
    gameObjects[1].movePlayer()
}

