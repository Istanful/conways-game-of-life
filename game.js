class Game {
  constructor() {
    this.history = new GameHistory();
    this.gameCanvas = new GameCanvas();
    this.state = {
      blockSize: 20,
      width: this.gameCanvas.width,
      height: this.gameCanvas.width,
    };
    this.tickMode = new PauseTickMode(this);
  }

  get board() {
    return this.history.last();
  }

  playPause() {
    this.tickMode = this.tickMode.next();
  }

  reset() {
    this.history = new GameHistory();
    this.draw();
  }

  draw() {
    this.gameCanvas.draw(this.board, this.state);
  }

  start() {
    this.gameCanvas.start(this);
    this.tick();
  }

  stepForwards = () => {
    new PlayTickMode(this).tick();
  };

  stepBackwards = () => {
    this.history.pop();
    this.draw();
  };

  tick = () => {
    this.tickMode.tick();

    const ticksPerSecond = q("#ticks-per-second").value();
    setTimeout(this.tick, 1000 / ticksPerSecond);
  };
}
