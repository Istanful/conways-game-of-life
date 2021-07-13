class Mouse {
  onScrollWheel = (callback) => {
    q(document).on("wheel", callback);
    return this;
  };
}
