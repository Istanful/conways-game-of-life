class Keyboard {
  constructor() {
    this.listeners = [];
  }

  listen = () => {
    q(document).on("keydown", (event) => {
      this.listeners
        .filter((listener) => listener.keyCombo.isMatching(event))
        .forEach((listener) => listener.callback(event));
    });
    return this;
  };

  onKeyDown = (keysStr, callback) => {
    this.listeners.push({
      keyCombo: new KeyCombination(keysStr),
      callback,
    });
    return this;
  };
}
