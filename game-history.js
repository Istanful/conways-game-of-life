const MAX_HISTORY_SIZE = 10 ** 10;

class GameHistory {
  constructor(boards, { maxSize = MAX_HISTORY_SIZE } = {}) {
    this.boards = boards ?? [new Board()];
    this.maxSize = maxSize;
  }

  push(board) {
    this.boards.push(board);
    this.boards = tail(this.boards, this.maxSize);
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
