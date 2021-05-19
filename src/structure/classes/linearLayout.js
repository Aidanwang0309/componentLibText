import * as Yup from "yup";
import {Frame} from "./frame";

class View {
  constructor() {}

  static validationSchema = Yup.object({
    direction: Yup.string()
      .oneOf(["horizontal", "vertical"])
      .default("vertical"),
    distribution: Yup.string()
      .oneOf([
        "fill",
        "fillEqually",
        "fillProportionally",
        "equalSpacing",
        "equalCentering",
      ])
      .default("fill"),
    align: Yup.string()
      .oneOf(["start", "end", "center", "stretch"])
      .default("fill"),
    children: Yup.array().of(Yup.string()),
    frame: Yup.lazy((value) => {
      if (!value) {
        return Yup.string().nullable().default(null);
      }
      return Frame.validationSchema;
    }),
  });

  static validate(value) {
    return this.validationSchema.cast(value);
  }
}

export {View};
