class WorldPosition {
  static fromOffset(offsetX, offsetY, gameState) {
    const { blockSize } = gameState;
    const worldX = Math.floor(offsetX / blockSize);
    const worldY = Math.floor(offsetY / blockSize);
    return [worldX, worldY];
  }
}
