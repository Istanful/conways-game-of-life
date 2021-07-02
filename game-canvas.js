class GameCanvas {
  constructor() {
    this.canvas = q("#game-canvas").first();
    this.context = this.canvas.getContext("2d");
  }

  draw(board, state) {
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.width, this.height);
    board.forEachCell((cell) => {
      this.context.fillStyle = cell.color;
      this.context.fillRect(
        cell.x * state.blockSize,
        cell.y * state.blockSize,
        state.blockSize,
        state.blockSize
      );
    });
  }

  get width() {
    return this.canvas.width;
  }

  get height() {
    return this.canvas.height;
  }
}
