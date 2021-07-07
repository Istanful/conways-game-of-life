class QueryResult {
  constructor(elements) {
    this.elements = elements;
  }

  value = () => {
    return this.first()?.value;
  };

  first = () => {
    return this.elements[0];
  };

  text = (text) => {
    this.elements.forEach((el) => {
      el.innerText = text;
    });
  };

  on = (event, callback) => {
    this.elements.forEach((el) => {
      el.addEventListener(event, callback);
    });
  };
}
