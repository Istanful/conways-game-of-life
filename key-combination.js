class KeyCombination {
  constructor(str) {
    this.keys = str.split("+");
  }

  isMatching(event) {
    const pressedKeys = [
      { key: event.key, isPressed: true },
      { key: "Shift", isPressed: event.shiftKey },
    ].filter((k) => k.isPressed);

    return this.keys.every((x) => pressedKeys.find((y) => y.key == x));
  }
}
