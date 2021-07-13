class WorldPosition {
  static fromOffset(offsetX, offsetY, gameState) {
    const { blockSize, cameraX, cameraY } = gameState;
    const worldX = Math.floor((offsetX - cameraX) / blockSize);
    const worldY = Math.floor((offsetY - cameraY) / blockSize);
    return [worldX, worldY];
  }
}
