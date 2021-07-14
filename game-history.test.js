describe("GameHistory", () => {
  describe("#push", () => {
    it("adds the given board to the history", () => {
      const previousBoard = new Board();
      previousBoard.set(0, 0, true);
      const gameHistory = new GameHistory();
      const board = new Board();

      gameHistory.push(board);

      expect(gameHistory.last()).toEqual(board);
    });
  });

  describe("#pop", () => {
    it("removes the last board from the history", () => {
      const previousBoard = new Board();
      previousBoard.set(0, 0, true);
      const gameHistory = new GameHistory([previousBoard]);
      const board = previousBoard.next();
      gameHistory.push(board);

      gameHistory.pop();

      expect(gameHistory.last()).toEqual(previousBoard);
    });

    context("when there are no more previous boards", () => {
      it("does not remove more boards", () => {
        const board = new Board();
        board.set(1, 1, true);
        const gameHistory = new GameHistory([board]);

        gameHistory.pop();

        expect(gameHistory.last()).toEqual(board);
      });
    });
  });
});
