class PlayTickMode {
  constructor(game) {
    this.game = game;
  }

  start() {
    q("#play-pause").text("Pause (Space)");
    return this;
  }

  tick = () => {
    this.game.history.push(this.game.board.next());
    this.game.draw();
  };

  next() {
    return new PauseTickMode(this.game).start();
  }
}
