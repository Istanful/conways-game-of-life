class GameHistory {
  constructor(boards) {
    this.boards = boards ?? [new Board()];
  }

  push(board) {
    this.boards.push(board);
  }

  pop() {
    if (this.boards.length <= 1) {
      return;
    }

    this.boards.pop();
  }

  last() {
    return this.boards[this.boards.length - 1];
  }
}
