class PauseTickMode {
  constructor(game) {
    this.game = game;
  }

  start() {
    q("#play-pause").text("Play (Space)");
    return this;
  }

  tick() {
    this.game.draw();
  }

  next() {
    return new PlayTickMode(this.game).start();
  }
}
