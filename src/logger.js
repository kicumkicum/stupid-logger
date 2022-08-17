const transports = {
  console: (...args) => {
    console.log(...args);
  },
  file: (...args) => {
    // TODO
  },
};

const send = transports.console;

const createLogger = (moduleName) => {
  const log = (...args) => {
    send(moduleName, ...args);
  };

  log.info = (...args) => {
    log('INFO', ...args);
  };

  log.warn = (...args) => {
    log('WARN', ...args);
  };

  log.debug = (...args) => {
    log('DEBUG', ...args);
  };

  log.error = (...args) => {
    log('ERROR', ...args);
  };

  return log;
};

module.exports = {
  createLogger,
};
