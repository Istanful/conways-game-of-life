describe("WorldPosition", () => {
  describe("#fromOffset", () => {
    it("returns the world position at that pixel", () => {
      const pos = WorldPosition.fromOffset(55, 100, { blockSize: 50 });

      expect(pos).toEqual([1, 2]);
    });
  });
});
