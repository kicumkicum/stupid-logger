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

  log.call = (func) => (...args) => {
    const result = func(...args);
    log(`CALL func with ARGS:`, ...args, `RESULT:`, result);

    return result;
  };

  return log;
};

module.exports = {
  createLogger,
};
