const transports = {
  console: (...args) => {
    console.log(...args);
  },
  file: (...args) => {
    // TODO
  },
};

module.exports = {
  transports,
};
