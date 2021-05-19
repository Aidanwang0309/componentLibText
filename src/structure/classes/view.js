import * as Yup from "yup";
import {Frame} from "./frame";

class View {
  constructor() {}

  static validationSchema = Yup.object({
    layout: Yup.string().default(null),
    // overflow: hidden | scroll | auto | initial | reset
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
