function drawMaze(maze) {
  for (let i = 0; i < 10; i++) {
    let gameRow = document.createElement("div");
    gameRow.classList.add("game-row");

    for (let j = 0; j < 10; j++) {
      let div = document.createElement("div");

      div.id = i + "" + j;
      div.classList.add("game-cell");
      if (maze[i][j].topWall) div.classList.add("top-border");
      if (maze[i][j].rightWall) div.classList.add("right-border");
      if (maze[i][j].bottomWall) div.classList.add("bottom-border");
      if (maze[i][j].leftWall) div.classList.add("left-border");
      gameRow.appendChild(div);
    }
    document.querySelector(".maze").appendChild(gameRow);
  }
}

function drawPerson(person) {
  document.querySelector(".person")?.remove();
  let personDiv = document.createElement("div");
  personDiv.classList.add("person");
  document.getElementById(`${person.i}${person.j}`).appendChild(personDiv);
}

function drawPrices(prices) {
  for (let img of document.querySelectorAll(".price")) {
    img.remove();
  }
  for (let price of prices) {
    if (price.isEaten == false) {
      let priceDiv = document.createElement("img");
      priceDiv.classList.add("price");
      priceDiv.setAttribute("src", "images/price.png");
      document.getElementById(`${price.i}${price.j}`).appendChild(priceDiv);
    }
  }
}

function drawEnemies(enemies) {
  for (let img of document.querySelectorAll(".enemy")) {
    img.remove();
  }
  for (let enemy of enemies) {
    if (enemy.isEaten == false) {
      let enemyDiv = document.createElement("img");
      enemyDiv.classList.add("enemy");
      enemyDiv.setAttribute("src", "images/enemy.png");
      document.getElementById(`${enemy.i}${enemy.j}`).appendChild(enemyDiv);
    }
  }
}

function drawTraps(traps) {
  for (let img of document.querySelectorAll(".trap")) {
    img.remove();
  }
  for (let trap of traps) {
    if (trap.isEaten == false) {
      let trapDiv = document.createElement("img");
      trapDiv.classList.add("trap");
      trapDiv.setAttribute("src", "images/trap.png");
      document.getElementById(`${trap.i}${trap.j}`).appendChild(trapDiv);
    }
  }
}

