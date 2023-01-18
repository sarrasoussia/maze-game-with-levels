class Cell {
  constructor(topWall, rightWall, bottomWall, leftWall) {
    this.topWall = topWall;
    this.rightWall = rightWall;
    this.bottomWall = bottomWall;
    this.leftWall = leftWall;
  }
}

class Point {
  constructor(i, j) {
    this.i = i;
    this.j = j;
  }

  

  moveUp() {
    if (this.i >= 1 && game.maze[this.i][this.j].topWall == false) {
      this.i -= 1;
      game.distance++;
    }
  }

  moveLeft() {
    if (this.j >= 1 && game.maze[this.i][this.j].leftWall == false) {
      this.j -= 1;
      game.distance++;
    }
  }

  moveDown() {
    if (this.i <= 8 && game.maze[this.i][this.j].bottomWall == false) {
      this.i += 1;
      game.distance++;
    }
  }

  moveRight() {
    if (this.j <= 8 && game.maze[this.i][this.j].rightWall == false) {
      this.j += 1;
      game.distance++;
    }
  }

  eat(items) {
    for (let item of items) {
      if (this.i === item.i && this.j === item.j && item.isEaten == false) {
        item.isEaten = true;
        console.log(item);
        if (item.isTrap) {
          this.i = 5;
          this.j = 0;
        }
      }
    }
  }
}

class Item extends Point {
  constructor(i, j, isEaten = false) {
    super(i, j);
    this.isEaten = isEaten;
  }
}

class Trap extends Item {
  isTrap = true;
}

class Game {
  maze = [
    [
      new Cell(true, true, false, true),
      new Cell(true, false, false, true),
      new Cell(true, false, false, false),
      new Cell(true, false, true, false),
      new Cell(true, false, false, false),
      new Cell(true, false, false, false),
      new Cell(true, true, false, false),
      new Cell(true, false, false, true),
      new Cell(true, false, false, false),
      new Cell(true, true, true, false),
    ],
    [
      new Cell(false, false, true, true),
      new Cell(false, true, true, false),
      new Cell(false, false, true, true),
      new Cell(true, true, true, false),
      new Cell(false, true, false, true),
      new Cell(false, true, false, true),
      new Cell(false, true, false, true),
      new Cell(false, true, false, true),
      new Cell(false, false, true, true),
      new Cell(true, true, false, false),
    ],
    [
      new Cell(true, false, false, true),
      new Cell(true, false, true, false),
      new Cell(true, false, true, false),
      new Cell(true, true, false, false),
      new Cell(false, true, true, true),
      new Cell(false, true, false, true),
      new Cell(false, true, false, true),
      new Cell(false, false, false, true),
      new Cell(true, true, true, false),
      new Cell(false, true, false, true),
    ],
    [
      new Cell(false, false, true, true),
      new Cell(true, true, false, false),
      new Cell(true, false, true, true),
      new Cell(false, true, true, false),
      new Cell(true, false, false, true),
      new Cell(false, true, true, false),
      new Cell(false, false, true, true),
      new Cell(false, true, true, false),
      new Cell(true, false, false, true),
      new Cell(false, true, true, false),
    ],
    [
      new Cell(true, false, false, true),
      new Cell(false, false, true, false),
      new Cell(true, false, true, false),
      new Cell(true, false, false, false),
      new Cell(false, true, true, false),
      new Cell(true, false, false, true),
      new Cell(true, false, true, false),
      new Cell(true, false, true, false),
      new Cell(false, false, true, false),
      new Cell(true, true, false, false),
    ],
    [
      new Cell(false, true, true, false),
      new Cell(true, false, true, true),
      new Cell(true, true, false, false),
      new Cell(false, false, true, true),
      new Cell(true, true, false, false),
      new Cell(false, false, true, true),
      new Cell(true, false, true, false),
      new Cell(true, false, true, false),
      new Cell(true, true, false, false),
      new Cell(false, true, false, true),
    ],
    [
      new Cell(true, false, false, true),
      new Cell(true, false, true, false),
      new Cell(false, true, true, false),
      new Cell(true, false, false, true),
      new Cell(false, true, false, false),
      new Cell(true, true, false, true),
      new Cell(true, false, false, true),
      new Cell(true, true, false, false),
      new Cell(false, true, false, true),
      new Cell(false, false, true, true),
    ],
    [
      new Cell(false, true, false, true),
      new Cell(true, false, true, true),
      new Cell(true, true, false, false),
      new Cell(false, true, false, true),
      new Cell(false, true, false, true),
      new Cell(false, true, false, true),
      new Cell(false, true, false, true),
      new Cell(false, true, true, true),
      new Cell(false, false, true, true),
      new Cell(true, true, false, false),
    ],
    [
      new Cell(false, true, false, true),
      new Cell(true, false, false, true),
      new Cell(false, true, false, false),
      new Cell(false, true, false, true),
      new Cell(false, true, false, true),
      new Cell(false, true, false, true),
      new Cell(false, true, false, true),
      new Cell(true, false, false, true),
      new Cell(true, false, true, false),
      new Cell(false, true, false, false),
    ],
    [
      new Cell(false, false, true, true),
      new Cell(false, true, true, false),
      new Cell(false, false, true, true),
      new Cell(false, true, true, false),
      new Cell(false, false, true, true),
      new Cell(false, true, true, false),
      new Cell(false, false, true, true),
      new Cell(false, true, true, false),
      new Cell(true, false, true, true),
      new Cell(false, true, true, false),
    ],
  ];
  isLose = false;
  isPaused = false;
  isWin = false;
  distance = 0;

  constructor(initial, goal, timer) {
    this.person = new Point(initial.i, initial.j);
    this.initial = initial;
    this.goal = goal;
    this.timer = timer;
    this.prices = generatePricesList(this);
    this.enemies = generateEnemiesList(this);
    this.traps = generateTrapsList(this);
  }

  get eatenPricesNumber() {
    return this.prices.filter((price) => price.isEaten).length;
  }

  get eatenEnemeies() {
    return this.enemies.filter((enemy) => enemy.isEaten).length;
  }

  get score() {
    return (
      this.eatenPricesNumber * 3 +
      this.eatenEnemeies * -3 +
      this.timer / 10 +
      (this.distance == 0 ? 0 : Math.floor(100 / this.distance))
    );
  }
}

function generateRandomPoint(game, exceptions, isTrap = false) {
  let randomI = 0;
  let randomJ = 0;
  do {
    randomI = Math.floor(Math.random() * 10);
    randomJ = Math.floor(Math.random() * 10);
  } while (
    (randomI == game.person.i && randomJ == game.person.j) ||
    exceptions.findIndex(
      (exception) => exception.i == randomI && exception.j == randomJ
    ) != -1
  );
  if (isTrap) {
    return new Trap(randomI, randomJ);
  } else {
    return new Item(randomI, randomJ);
  }
}

function generatePricesList(game) {
  let valueList = [];
  return Array.from(Array(6), (_) => {
    let value = generateRandomPoint(game, valueList);
    valueList.push(value);
    return value;
  });
}

function generateEnemiesList(game) {
  let valueList = [];
  return Array.from(Array(6), (_) => {
    let value = generateRandomPoint(game, [...valueList, ...game.prices]);
    valueList.push(value);
    return value;
  });
}

function generateTrapsList(game) {
  let valueList = [];
  return Array.from(Array(3), (_) => {
    let value = generateRandomPoint(
      game,
      [...valueList, ...game.prices, ...game.enemies],
      true
    );
    valueList.push(value);
    return value;
  });
}
