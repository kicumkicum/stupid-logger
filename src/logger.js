const transports = {
  console: (...args) => {
    console.log(...args);
  },
  file: (...args) => {
    // TODO
  },
};

const createSend = (transports) => (...args) => {
  Object.values(transports).forEach((send) => {
    send(...args);
  });
};

const createLogger = ({transports}) => (moduleName) => {
  const send = createSend(transports);

  const log = (...args) => {
    send(moduleName, ...args);
  };

  log.info = (...args) => {
    send('INFO', moduleName, ...args);
  };

  log.warn = (...args) => {
    send('WARN', moduleName, ...args);
  };

  log.debug = (...args) => {
    send('DEBUG', moduleName, ...args);
  };

  log.error = (...args) => {
    send('ERROR', moduleName, ...args);
  };

  return log;
};

module.exports = {
  createLogger,
};
