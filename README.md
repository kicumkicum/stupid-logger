# stupid-logger

## Example

```js
// logger.js
const {createLogger, trasports} = require(`stupid-logger`);
const logger = createLogger({trasports});
module.exports = {logger};

// some-module.js
const {logger} = require(`./logger`);
const log = logger(`some-module`);

log(`foo bar`); // some-module foo bar
log.info(`bar baz`); // some-module INFO bar baz

log.call(func)(42); // some-module CALL func with ARGS: 42, RESULT: 43
```
