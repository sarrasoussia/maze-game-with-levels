let interval = 0;
let game = new Game(new Point(5, 0), new Point(6, 9), 50);


// function reset(game){
//   clearInterval(interval);

// }

// function restart(game){
//   document.querySelector(".welcome").classList.remove("cached");
//   document.querySelector(".lose-result").classList.add("cached");
//   document.querySelector(".win-result").classList.add("cached");
//   document.querySelector(".timer-board").classList.add("cached");
//   document.querySelector(".game-board").classList.add("cached");
//   game.isLose = false;
//   game.isWin = false;
//   reset(game);
// }


function startGame(game) {
  document.querySelector(".welcome").classList.add("cached");
  document.querySelector(".timer-board").classList.remove("cached");
  document.querySelector(".game-board").classList.remove("cached");
  document.querySelector(".win-result").classList.add("cached");
  document.querySelector(".lose-result").classList.add("cached");
  startTimer(game);
  
}

function pauseGame(game, pauseButton) {
  game.isPaused = !game.isPaused;
  pauseButton.innerText = game.isPaused ? "🔒" : "🔓";
  document.querySelector(".maze").classList.toggle("cached");
}

function loseGame(game) {
  game.isLose = true;
  document.querySelector(".game-board").classList.add("cached");
  document.querySelector(".timer-board").classList.add("cached");
  document.querySelector(".lose-result").classList.remove("cached");
}

function startTimer(game) {
  interval = setInterval(() => {
    if (game.timer <= 0) {
      loseGame(game);
      clearInterval(interval);
    } else if (game.isWin) {
      clearInterval(interval);
    } else if (!game.isPaused) {
      game.timer--;
      let minutes = Math.floor(game.timer / 60);
      let seconds = game.timer % 60;
      document.querySelector(".timer").innerText = `${
        minutes < 10 ? 0 : ""
      }${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
    }
  }, 1000);
}

function winGame(game) {
  document.querySelector("#score").innerText = `Final Score: ${game.score}`;
  let minutes = Math.floor(game.timer / 60);
  let seconds = game.timer % 60;
  document.querySelector("#time").innerText = `Time: ${
    minutes < 10 ? 0 : ""
  }${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
  document.querySelector(".game-board").classList.add("cached");
  document.querySelector(".timer-board").classList.add("cached");
  document.querySelector(".win-result").classList.remove("cached");
}

// x=document.getElementsByClassName('choix');
// console.log(x);
// switch (x){
//   case "EASY":
//     drawMaze(game.maze);
//     drawPerson(game.person);
//     break;
//   case "MEDIUM":
//     drawMaze(game.maze);
//     drawPerson(game.person);
//     drawPrices(game.prices);
//     drawEnemies(game.enemies);
//     break;
//   case "HARD":
//     drawMaze(game.maze);
//     drawPerson(game.person);
//     drawPrices(game.prices);
//     drawEnemies(game.enemies);
//     drawTraps(game.traps);
//     break;
//   default:
//     break;

// }



function easy(game){
  drawMaze(game.maze);
  drawPerson(game.person);
  drawPrices(game.prices);
  document.addEventListener("keydown", (ev) => {
    if (!game.isLose && !game.isWin) {
      switch (ev.key) {
        case "ArrowUp":
          game.person.moveUp();
          break;
        case "ArrowRight":
          game.person.moveRight();
          break;
        case "ArrowDown":
          game.person.moveDown();
          break;
        case "ArrowLeft":
          game.person.moveLeft();
          break;
        default:
          break;
      }
    }

    game.person.eat([...game.prices]);
    if (game.person.i === game.goal.i && game.person.j === game.goal.j) {
      game.isWin = true;
      winGame(game);
    }else {
      drawPerson(game.person);
      drawPrices(game.prices);
    }
  });    
 
}
// +++++++++++++++

function medium(game){
  drawMaze(game.maze);
  drawPerson(game.person);
  drawPrices(game.prices);
  drawEnemies(game.enemies);
  document.addEventListener("keydown", (ev) => {
    if (!game.isLose && !game.isWin) {
      switch (ev.key) {
        case "ArrowUp":
          game.person.moveUp();
          break;
        case "ArrowRight":
          game.person.moveRight();
          break;
        case "ArrowDown":
          game.person.moveDown();
          break;
        case "ArrowLeft":
          game.person.moveLeft();
          break;
        default:
          break;
      }
  
      game.person.eat([...game.prices, ...game.enemies]);
      if (game.person.i === game.goal.i && game.person.j === game.goal.j) {
        game.isWin = true;
        winGame(game);
      }
      if (game.eatenEnemeies >= 3) {
        loseGame(game);
      } else {
        drawPerson(game.person);
        drawPrices(game.prices);
        drawEnemies(game.enemies);
       
      }
    }
  });

}

// +++++++++++++++

function hard(game){
  drawMaze(game.maze);
  drawPerson(game.person);
  drawPrices(game.prices);
  drawEnemies(game.enemies);
  drawTraps(game.traps);
  document.addEventListener("keydown", (ev) => {
    if (!game.isLose && !game.isWin) {
      switch (ev.key) {
        case "ArrowUp":
          game.person.moveUp();
          break;
        case "ArrowRight":
          game.person.moveRight();
          break;
        case "ArrowDown":
          game.person.moveDown();
          break;
        case "ArrowLeft":
          game.person.moveLeft();
          break;
        default:
          break;
      }
  
      game.person.eat([...game.prices, ...game.enemies, ...game.traps]);
      if (game.person.i === game.goal.i && game.person.j === game.goal.j) {
        game.isWin = true;
        winGame(game);
      }
      if (game.eatenEnemeies >= 3) {
        loseGame(game);
      } else {
        drawPerson(game.person);
        drawPrices(game.prices);
        drawEnemies(game.enemies);
        drawTraps(game.traps);
      }
    }
  });

}



