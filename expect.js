function inspect(value) {
  return JSON.stringify(value);
}

function describe(description, callback) {
  console.group(description);
  callback();
  console.groupEnd();
}

const context = describe;

function it(description, callback) {
  console.group(description);

  try {
    callback();
  } catch (err) {
    console.error(err);
  }

  console.groupEnd();
}

function expect(actual) {
  return {
    toEqual: (expected) => {
      if (inspect(actual) === inspect(expected)) {
        return;
      }

      throw new Error(
        `Expected ${inspect(actual)} to equal ${inspect(expected)}`
      );
    },
  };
}
