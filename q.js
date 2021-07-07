function q(queryOrElement) {
  const type = typeof queryOrElement;
  const performQueryMap = {
    string: () =>
      Array.prototype.slice.call(document.querySelectorAll(queryOrElement)),
    object: () => wrap(queryOrElement),
  };
  const elements = performQueryMap[type]();
  return new QueryResult(elements);
}
