class Game {
  constructor() {
    this.board = new Board();
    this.gameCanvas = new GameCanvas();
    this.state = {
      blockSize: 20,
    };
    this.tickMode = new PauseTickMode(this);
  }

  playPause() {
    this.tickMode = this.tickMode.next();
  }

  reset() {
    this.board = new Board();
    this.draw();
  }

  draw() {
    this.gameCanvas.draw(this.board, this.state);
  }

  start() {
    this.gameCanvas.canvas.addEventListener("click", ({ offsetX, offsetY }) => {
      const { width, height } = this.gameCanvas;
      const relativeX = offsetX / this.gameCanvas.width;
      const x = Math.floor((width / this.state.blockSize) * relativeX);
      const relativeY = offsetY / this.gameCanvas.height;
      const y = Math.floor((height / this.state.blockSize) * relativeY);

      this.board.set(x, y, !this.board.get(x, y).isAlive);
      this.draw();
    });
    this.tick();
  }

  tick = () => {
    this.tickMode.tick();

    const ticksPerSecond = q("#ticks-per-second").value();
    setTimeout(this.tick, 1000 / ticksPerSecond);
  };
}
