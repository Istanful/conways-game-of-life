describe("Board", () => {
  describe("#set", () => {
    context("when given true", () => {
      it("sets that cell to alive", () => {
        const board = new Board();

        board.set(0, 0, true);

        expect(board.get(0, 0).isAlive).toEqual(true);
      });
    });
  });

  describe("#next", () => {
    context("when board has one cell", () => {
      it("returns a new board with that cell dead", () => {
        const board = new Board();
        board.set(0, 0, true);

        const newBoard = board.next();

        expect(newBoard.get(0, 0).isAlive).toEqual(false);
      });
    });

    context("when board has unset cells that should spawn", () => {
      it("spawns those cells", () => {
        const board = new Board();
        board.set(0, 0, true);
        board.set(1, 1, true);
        board.set(2, 0, true);

        const newBoard = board.next();

        expect(newBoard.get(1, 0).isAlive).toEqual(true);
      });
    });

    context("when board has several cells", () => {
      it("returns a board with updated cells", () => {
        const board = new Board();
        board.set(0, 0, true);
        board.set(1, 1, true);
        board.set(2, 0, true);

        const newBoard = board.next();

        expect(newBoard.get(0, 0).isAlive).toEqual(false);
        expect(newBoard.get(1, 1).isAlive).toEqual(true);
        expect(newBoard.get(2, 0).isAlive).toEqual(false);
      });
    });
  });
});
