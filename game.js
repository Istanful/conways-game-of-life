class Game {
  constructor() {
    this.board = new Board();
    this.gameCanvas = new GameCanvas();
    this.state = {
      blockSize: 20,
      width: this.gameCanvas.width,
      height: this.gameCanvas.width,
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
    this.gameCanvas.start(this);
    this.tick();
  }

  tick = () => {
    this.tickMode.tick();

    const ticksPerSecond = q("#ticks-per-second").value();
    setTimeout(this.tick, 1000 / ticksPerSecond);
  };
}
