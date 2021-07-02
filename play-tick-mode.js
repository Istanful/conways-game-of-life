class PlayTickMode {
  constructor(game) {
    this.game = game;
  }

  start() {
    q("#play-pause").text("Pause");
    return this;
  }

  tick = () => {
    this.game.board = this.game.board.next();
    this.game.draw();
  };

  next() {
    return new PauseTickMode(this.game).start();
  }
}
