class Keyboard {
  constructor() {
    this.listeners = {};
  }

  listen = () => {
    q(document).on("keydown", (event) => {
      const callback = this.listeners[event.key] ?? (() => {});
      callback(event);
    });
  };

  onKeyDown = (key, callback) => {
    this.listeners[key] = callback;
    return this;
  };
}
