class TouchMouseEvent {
  constructor(touchEvent) {
    Object.assign(this, touchEvent);
    this.targetRect = touchEvent.target.getBoundingClientRect();
    this.targetTouches = touchEvent.targetTouches;
  }

  get offsetX() {
    return this.targetTouches[0].pageX - this.targetRect.left;
  }

  get offsetY() {
    return this.targetTouches[0].pageY - this.targetRect.top;
  }
}
