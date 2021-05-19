import * as Yup from "Yup";

Yup.addMethod(
  Yup.object,
  "optional",
  function (isOptional = true, defaultValue = undefined) {
    return (
      this.transform((value) => {
        // If false is passed, skip the transform
        if (!isOptional) return value;

        // If any child property has a value, skip the transform
        if (
          value &&
          Object.values(value).some(
            (v) => !(v === null || v === undefined || v === ""),
          )
        ) {
          return value;
        }

        return defaultValue;
      })
        // Remember, since we're dealing with the `object`
        // type, we have to change the default value
        .default(defaultValue)
    );
  },
);
