import * as Yup from "yup";

class Frame {
  constructor() {}

  static validationSchema = Yup.object({
    width: Yup.object({
      isConstrained: Yup.boolean().default(false),
      value: Yup.number().min(0).nullable().default(null),
    }).default({
      isConstrained: false,
      value: null,
    }),
    insets: Yup.object({
      top: Yup.number().min(0).nullable().default(null),
      left: Yup.number().min(0).nullable().default(null),
      bottom: Yup.number().min(0).nullable().default(null),
      right: Yup.number().min(0).nullable().default(null),
    }).default({
      top: null,
      left: null,
      bottom: null,
      right: null,
    }),
  });

  static validate(value) {
    return this.validationSchema.cast(value);
  }
}

export {Frame};
