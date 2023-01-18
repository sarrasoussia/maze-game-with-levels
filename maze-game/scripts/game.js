let initial = new Point(5, 0);

let gameObject = {
  maze: [
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
  ],
  isLose: false,
  isPaused: false,
  isWin: false,
  distance: 0,
  initial: initial,
  person: new Point(initial.i, initial.j),
  goal: new Point(6, 9),
  timer: 120,

  get eatenPricesNumber() {
    return this.prices.filter((price) => price.isEaten).length;
  },

  get eatenEnemeies() {
    return this.enemies.filter((enemy) => enemy.isEaten).length;
  },

  get score() {
    return (
      this.eatenPricesNumber * 3 +
      this.eatenEnemeies * -3 +
      this.timer / 10 +
      (this.distance == 0 ? 0 : Math.floor(100 / this.distance))
    );
  },
};

// gameObject.prices = generatePricesList(gameObject);
// gameObject.enemies = generateEnemiesList(gameObject);
// gameObject.traps = generateTrapsList(gameObject);
