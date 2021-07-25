class PauseTickMode {
  constructor(game) {
    this.game = game;
  }

  start() {
    q("#play-pause").class("play-btn", true);
    q("#play-pause").class("pause-btn", false);
    return this;
  }

  tick() {
    this.game.draw();
  }

  next() {
    return new PlayTickMode(this.game).start();
  }
}
