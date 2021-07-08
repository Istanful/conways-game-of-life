const MAX_TICKS_PER_SECOND = 128;
const MIN_TICKS_PER_SECOND = 0.5;

class Game {
  constructor() {
    this.history = new GameHistory();
    this.gameCanvas = new GameCanvas();
    this.state = {
      blockSize: 20,
      width: this.gameCanvas.width,
      height: this.gameCanvas.width,
      ticksPerSecond: 3,
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

  increaseSpeed = () => {
    const current = this.state.ticksPerSecond;
    this.state.ticksPerSecond = Math.min(MAX_TICKS_PER_SECOND, current * 2);
  };

  decreaseSpeed = () => {
    const current = this.state.ticksPerSecond;
    this.state.ticksPerSecond = Math.max(MIN_TICKS_PER_SECOND, current / 2);
  };

  stepForwards = () => {
    new PlayTickMode(this).tick();
  };

  stepBackwards = () => {
    this.history.pop();
    this.draw();
  };

  tick = () => {
    this.tickMode.tick();
    setTimeout(this.tick, 1000 / this.state.ticksPerSecond);
  };
}
