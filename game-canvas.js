class GameCanvas {
  constructor() {
    this.canvas = q("#game-canvas").first();
    this.context = this.canvas.getContext("2d");
    this.machine = new PaintStateMachine();
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
    this.registerPaintListener(game);
  }

  registerPaintListener(game) {
    const canvas = q(this.canvas);
    canvas.on("mousedown", (ev) => this.machine.dispatch("MOUSE_DOWN", ev));
    canvas.on("mousemove", (ev) => this.machine.dispatch("MOUSE_MOVE", ev));
    canvas.on("mouseup", (ev) => this.machine.dispatch("MOUSE_UP", ev));

    this.machine.onTouch("PAINTING", (event) => this.handlePaint(game, event));
  }

  handlePaint = (game, { offsetX, offsetY }) => {
    const newPos = WorldPosition.fromOffset(offsetX, offsetY, game.state);
    const isSamePos = inspect(game.state.lastPos) === inspect(newPos);
    game.state.lastPos = newPos;

    if (isSamePos) {
      return;
    }

    const [x, y] = newPos;
    game.board.set(x, y, !game.board.get(x, y).isAlive);
    this.draw(game.board, game.state);
  };

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
