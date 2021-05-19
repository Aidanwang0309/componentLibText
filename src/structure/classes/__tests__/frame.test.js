import {Frame} from "../frame";
import {defaultWidth, defaultFrame, defaultInsets} from "./__values__/frame";

describe("Frame Cast", () => {
  it("should cast value", () => {
    const value = {
      width: {
        isConstrained: true,
        value: 1,
      },
      insets: {
        top: 0,
        bottom: 0,
        left: 10,
        right: 10,
      },
    };
    const result = Frame.validate(value);

    expect(result).toStrictEqual(value);
  });

  it("should cast empty object to full default frame", () => {
    const result = Frame.validate({});

    expect(result).toStrictEqual(defaultFrame);
  });

  it("should cast missing width to default width", () => {
    const result = Frame.validate({
      insets: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    });

    expect(result).toStrictEqual({
      width: defaultWidth,
      insets: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    });
  });

  it("should cast missing insets to default inserts", () => {
    const result = Frame.validate({
      width: {
        isConstrained: false,
        value: 1,
      },
    });

    expect(result).toStrictEqual({
      width: {
        isConstrained: false,
        value: 1,
      },
      insets: defaultInsets,
    });
  });

  it("should cast missing properties with defaults for that value", () => {
    const result = Frame.validate({
      width: {
        value: 1,
      },
      insets: {
        top: 0,
        bottom: 0,
      },
    });

    expect(result).toStrictEqual({
      width: {
        isConstrained: false,
        value: 1,
      },
      insets: {
        top: 0,
        bottom: 0,
        left: null,
        right: null,
      },
    });
  });
});
