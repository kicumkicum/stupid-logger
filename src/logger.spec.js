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
    expect(send).toBeCalledWith(`INFO`, `test.logger`, 42);
  });
});
