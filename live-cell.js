class LiveCell {
  constructor(x, y) {
    this.isAlive = true;
    this.x = x;
    this.y = y;
  }

  willBeAlive(neighbors) {
    const aliveNeighbors = neighbors.filter((neighbor) => neighbor.isAlive);
    return aliveNeighbors.length > 1 && aliveNeighbors.length < 4;
  }

  get color() {
    return "white";
  }
}
