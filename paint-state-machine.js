class PaintStateMachine {
  constructor(state = "IDLE") {
    this.state = state;
    this.config = {
      IDLE: {
        on: {
          MOUSE_DOWN: "PAINTING",
        },
      },
      PAINTING: {
        on: {
          MOUSE_MOVE: "PAINTING",
          MOUSE_UP: "IDLE",
        },
      },
    };
  }

  onTouch(state, callback) {
    this.config[state].onTouch = callback;
  }

  dispatch(action, event) {
    const newState = this.config[this.state].on[action] ?? this.state;
    this.state = newState;
    const onTouchCallback = this.config[newState].onTouch ?? (() => {});
    onTouchCallback(event);
  }
}
