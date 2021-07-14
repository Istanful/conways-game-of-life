function tail(array, size = array.length) {
  const startIndex = Math.max(0, array.length - size);
  return array.slice(startIndex);
}
