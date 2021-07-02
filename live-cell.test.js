describe("LiveCell", () => {
  describe("#willBeAlive", () => {
    context("when cell has no neighbors", () => {
      it("will die", () => {
        const cell = new LiveCell();

        const willBeAlive = cell.willBeAlive([]);

        expect(willBeAlive).toEqual(false);
      });
    });

    context("when cell has one live neighbor", () => {
      it("will die", () => {
        const cell = new LiveCell();

        const willBeAlive = cell.willBeAlive([new LiveCell()]);

        expect(willBeAlive).toEqual(false);
      });
    });

    context("when cell has two live neighbors", () => {
      it("will be alive", () => {
        const cell = new LiveCell();

        const willBeAlive = cell.willBeAlive([new LiveCell(), new LiveCell()]);

        expect(willBeAlive).toEqual(true);
      });
    });

    context("when cell has three live neighbors", () => {
      it("will be alive", () => {
        const cell = new LiveCell();

        const willBeAlive = cell.willBeAlive([
          new LiveCell(),
          new LiveCell(),
          new LiveCell(),
        ]);

        expect(willBeAlive).toEqual(true);
      });
    });

    context("when cell has four live neighbors", () => {
      it("will die", () => {
        const cell = new LiveCell();

        const willBeAlive = cell.willBeAlive([
          new LiveCell(),
          new LiveCell(),
          new LiveCell(),
          new LiveCell(),
        ]);

        expect(willBeAlive).toEqual(false);
      });
    });
  });
});
