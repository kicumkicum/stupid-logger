const {createLogger} = require(`./logger`);

describe(`logger`, () => {
  it(`Should has correctly interface`, () => {
    const log = createLogger({})(`test.logger`);

    expect(typeof log).toBe(`function`);
    expect(typeof log.error).toBe(`function`);
    expect(typeof log.info).toBe(`function`);
    expect(typeof log.warn).toBe(`function`);
    expect(typeof log.debug).toBe(`function`);
  });

  it(`Should use transports`, () => {
    const send = jest.fn();
    const transports = {send};
    const log = createLogger({transports})(`test.logger`);

    log(42);
    expect(send).toBeCalledWith(`test.logger`, 42);
  });

  it(`Should call helper methods`, () => {
    const send = jest.fn();
    const transports = {send};
    const log = createLogger({transports})(`test.logger`);

    log.info(42);
    expect(send).toBeCalledWith(`test.logger`, `INFO`, 42);
  });

  it(`Should work like wrapper for functions`, () => {
    const send = jest.fn();
    const transports = {send};
    const _ = createLogger({transports})(`test.logger`);
    const func = (a) => a + 1;

    _.call(func)(42);
    expect(send).toBeCalledWith(`test.logger`, `CALL func with ARGS:`, 42, `RESULT:`, 43);
  });

  it(`Should work like wrapper for functions. Ex 2`, () => {
    const send = jest.fn();
    const transports = {send};
    const log = createLogger({transports})(`test.logger`);
    const func = (a, b) => a + b;

    log.call(func)(42, 43);
    expect(send).toBeCalledWith(`test.logger`, `CALL func with ARGS:`, 42, 43, `RESULT:`, 85);
  });

  it(`Should work like wrapper for functions. Ex 3`, () => {
    const send = jest.fn();
    const transports = {send};
    const log = createLogger({transports})(`test.logger`);
    const func = (a, b) => b;

    log.call(func)({foo: `bar`}, {baz: 42});
    expect(send).toBeCalledWith(`test.logger`, `CALL func with ARGS:`, {foo: "bar"}, {baz: 42}, `RESULT:`, {baz: 42});
  });
});
