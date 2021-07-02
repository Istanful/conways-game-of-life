class PauseTickMode {
  constructor(game) {
    this.game = game;
  }

  start() {
    q("#play-pause").text("Play");
    return this;
  }

  tick() {
    this.game.gameCanvas.draw(this.game.board, this.game.state);
  }

  next() {
    return new PlayTickMode(this.game).start();
  }
}
