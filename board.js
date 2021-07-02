const CELL_SETTER = {
  true: (data, x, y) => {
    data[`${x}-${y}`] = new LiveCell(x, y);
  },
  false: (data, x, y) => {
    delete data[`${x}-${y}`];
  },
};

class Board {
  constructor() {
    this.data = {};
  }

  set(x, y, isAlive) {
    CELL_SETTER[isAlive](this.data, x, y);
  }

  get(x, y) {
    return [this.data[`${x}-${y}`], new DeadCell(x, y)].filter(Boolean)[0];
  }

  forEachCell(callback) {
    Object.values(this.data).forEach((cell, i) => {
      callback(cell, i);
    });
  }

  next() {
    const newBoard = new Board();
    this.forEachCell((cell) => {
      const neighbors = this.getNeighbours(cell);
      newBoard.set(cell.x, cell.y, cell.willBeAlive(this.getNeighbours(cell)));
      neighbors.forEach((neighbor) => {
        newBoard.set(
          neighbor.x,
          neighbor.y,
          neighbor.willBeAlive(this.getNeighbours(neighbor))
        );
      });
    });
    return newBoard;
  }

  getNeighbours(cell) {
    return [
      this.get(cell.x + 1, cell.y),
      this.get(cell.x + 1, cell.y - 1),
      this.get(cell.x, cell.y - 1),
      this.get(cell.x - 1, cell.y - 1),
      this.get(cell.x - 1, cell.y),
      this.get(cell.x - 1, cell.y + 1),
      this.get(cell.x, cell.y + 1),
      this.get(cell.x + 1, cell.y + 1),
    ];
  }
}
