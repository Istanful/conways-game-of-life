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

  start(game) {
    this.fitToScreen();
    this.registerClickListener(game);
  }

  registerClickListener(game) {
    this.canvas.addEventListener("click", ({ offsetX, offsetY }) => {
      const [x, y] = WorldPosition.fromOffset(offsetX, offsetY, game.state);
      game.board.set(x, y, !game.board.get(x, y).isAlive);
      this.draw(game.board, game.state);
    });
  }

  fitToScreen() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
  }

  get width() {
    return this.canvas.width;
  }

  get height() {
    return this.canvas.height;
  }
}
