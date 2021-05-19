export const styleObjectToString = (styleObject: object) =>
  Object.entries(styleObject)
    .map(([style, value2]) => `${style}: ${value2}`)
    .join(";");

export const styleObjectToCSSString = (
  selector: string,
  styleObject: object
): string => `${selector} {
    ${styleObjectToString(styleObject)}
  }`;

export const selectorGenerator = (key: string, className: string) => {
  switch (key) {
    case "unselected": {
      return className;
    }
    case "selected": {
      return `${className}:active`;
    }
    case "disabled": {
      return `${className}:disabled`;
    }
    default:
      return "";
  }
};

export const radioSelectorGenerator = (key: string, className: string) => {
  switch (key) {
    case "unselected": {
      return className;
    }
    case "selected": {
      return `${className}:checked`;
    }
    case "disabled": {
      return `${className}:disabled`;
    }
    default:
      return "";
  }
};

export const determineBreakPoint = (width: number) => {
  const breakPoints = [
    {width: 48, name: "sm"},
    {width: 60, name: "md"},
    {width: 72, name: "lg"},
    {width: 84, name: "xl"},
    {width: 96, name: "xxl"},
  ];
  const widthAsEm = width / 16;
  return breakPoints.reduce((accu, i) => (widthAsEm < i.width ? accu : i), {
    width: 0,
    name: "xs",
  });
};

// const radioSelectorGenerator = (key, className) => {
//     switch (key) {
//         case 'unselected': {
//             return className;
//         }
//         case 'selected': {
//             return `${className}:checked`;
//         }
//         case 'disabled': {
//             return `${className}:disabled`;
//         }
//         default: return '';
//     }
// };

// const emptyObject = obj => Object.entries(obj).length === 0;

// export {
//     styleObjectToString,
//     styleObjectToCSSString,
//     selectorGenerator,
//     radioSelectorGenerator,
//     // radioBtnSelectorGenerator,
//     // emptyObject,
// };
// export default {
//     styleObjectToString,
//     styleObjectToCSSString,
//     selectorGenerator,
//     radioSelectorGenerator,
//     // radioBtnSelectorGenerator,
//     // emptyObject,
// };
