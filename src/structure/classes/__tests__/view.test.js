import {View} from "../view";
import {defaultView, defaultFrame} from "./__values__/view";

describe("View Cast", () => {
  it("should cast value", () => {
    const value = {
      layout: "hello world",
      frame: defaultFrame,
    };
    const result = View.validate(value);

    expect(result).toStrictEqual({
      layout: "hello world",
      frame: defaultFrame,
    });
  });

  it("should cast empty object to full default view", () => {
    const result = View.validate({});

    expect(result).toStrictEqual(defaultView);
  });

  it("should cast missing layout to default layout", () => {
    const result = View.validate({frame: defaultFrame});

    expect(result).toStrictEqual({
      layout: null,
      frame: defaultFrame,
    });
  });

  it("should cast missing frame to default frame", () => {
    const result = View.validate({frame: defaultFrame});

    expect(result).toStrictEqual(defaultView);
  });
});
