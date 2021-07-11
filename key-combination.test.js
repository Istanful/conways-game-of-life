describe("KeyCombination", () => {
  describe("#isMatching", () => {
    context("when event has no modifier keys", () => {
      it("matches the same key", () => {
        const combo = new KeyCombination("e");
        const event = new KeyboardEvent("mousedown", { key: "e" });

        const isMatching = combo.isMatching(event);

        expect(isMatching).toEqual(true);
      });

      it("does not match another key", () => {
        const combo = new KeyCombination("x");
        const event = new KeyboardEvent("mousedown", { key: "e" });

        const isMatching = combo.isMatching(event);

        expect(isMatching).toEqual(false);
      });
    });

    context("when given shift and key", () => {
      it("does not match if only key given", () => {
        const combo = new KeyCombination("Shift+e");
        const event = new KeyboardEvent("mousedown", { key: "e" });

        const isMatching = combo.isMatching(event);

        expect(isMatching).toEqual(false);
      });

      it("does match if modifier and key is pressed", () => {
        const combo = new KeyCombination("Shift+e");
        const event = new KeyboardEvent("mousedown", {
          key: "e",
          shiftKey: true,
        });

        const isMatching = combo.isMatching(event);

        expect(isMatching).toEqual(true);
      });
    });
  });
});
