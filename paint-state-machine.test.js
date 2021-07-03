describe("PaintStateMachine", () => {
  describe("#dispatch", () => {
    context("when idle", () => {
      it("becomes painting on mouse down", () => {
        const machine = new PaintStateMachine("IDLE");

        machine.dispatch("MOUSE_DOWN");

        expect(machine.state).toEqual("PAINTING");
      });

      it("remains idle on mouse move", () => {
        const machine = new PaintStateMachine("IDLE");

        machine.dispatch("MOUSE_MOVE");

        expect(machine.state).toEqual("IDLE");
      });
    });

    context("when painting", () => {
      it("keeps painting on mouse move", () => {
        const machine = new PaintStateMachine("PAINTING");

        machine.dispatch("MOUSE_MOVE");

        expect(machine.state).toEqual("PAINTING");
      });

      it("stops painting on mouse up", () => {
        const machine = new PaintStateMachine("PAINTING");

        machine.dispatch("MOUSE_UP");

        expect(machine.state).toEqual("IDLE");
      });
    });
  });
});
