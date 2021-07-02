class DeadCell {
  constructor(x, y) {
    this.isAlive = false;
    this.x = x;
    this.y = y;
  }

  willBeAlive(neighbors) {
    const liveNeigbors = neighbors.filter((neighbor) => neighbor.isAlive);
    return liveNeigbors.length === 3;
  }

  get color() {
    return "black";
  }
}
