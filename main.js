const game = new Game();
game.start();
new Keyboard()
  .onKeyDown("ArrowRight", () => game.stepForwards())
  .onKeyDown("ArrowLeft", () => game.stepBackwards())
  .onKeyDown(" ", () => game.playPause())
  .onKeyDown(">", () => game.increaseSpeed())
  .onKeyDown("<", () => game.decreaseSpeed())
  .listen();
