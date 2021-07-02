describe("DeadCell", () => {
  describe("#willBeAlive", () => {
    context("when it has two live neighbors", () => {
      it("will remain dead", () => {
        const cell = new DeadCell();

        const willBeAlive = cell.willBeAlive([new LiveCell(), new LiveCell()]);

        expect(willBeAlive).toEqual(false);
      });
    });

    context("when it has three live neighbors", () => {
      it("will resurrect", () => {
        const cell = new DeadCell();

        const willBeAlive = cell.willBeAlive([
          new LiveCell(),
          new LiveCell(),
          new LiveCell(),
        ]);

        expect(willBeAlive).toEqual(true);
      });
    });

    context("when it has two live and one dead neighbor", () => {
      it("will remain dead", () => {
        const cell = new DeadCell();

        const willBeAlive = cell.willBeAlive([
          new LiveCell(),
          new LiveCell(),
          new DeadCell(),
        ]);

        expect(willBeAlive).toEqual(false);
      });
    });
  });
});
