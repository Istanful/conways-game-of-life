function q(query) {
  const result = Array.prototype.slice.call(document.querySelectorAll(query));
  result.value = () => result[0]?.value;
  result.first = () => result[0];
  result.text = (text) => {
    result.forEach((el) => {
      el.innerText = text;
    });
  };
  return result;
}
