import {StateStyle, ThemeValue, UnparsedBorder} from "@type/theme_types";

// const objectToCSSString = (selector, styleObject) => `${selector} {
//   ${Object.entries(styleObject).map(([style, value2]) => `${style}: ${value2}`).join(';')}
// }`;

const selectorGenerator = (key: string, className: string) => {
  switch (key) {
    case "unselected":
      return `.${className}`;
    case "selected":
      return `.${className}:active`;
    case "disabled":
      return `.${className}:disabled`;
    default:
      return "";
  }
};

class GenerateState {
  public stateStylings: StateValueProps;

  constructor(state?: StateValueProps) {
    this.stateStylings =
      state ||
      (({
        disabled: {},
        selected: {},
        unselected: {},
      } as any) as StateValueProps);
  }

  get val() {
    return this.stateStylings;
  }

  public handleStyle = (
    theme: ThemeValue,
    property: string,
    selector: Selector,
    style: string
  ) => {
    if (style === null) {
      return this.stateStylings.disabled[property] ?? "transparent";
    }
    return `#${theme.colors[style]}`;
  };

  public generateWidthState({property, value}: GenerateWidthStateProps) {
    if (value === (undefined || null)) return this;
    this.stateStylings = {
      disabled: {
        ...this.stateStylings.disabled,
        [property]:
          typeof value === "object" ? `${value.disabled}px` : `${value || 0}px`,
      },
      selected: {
        ...this.stateStylings.selected,
        [property]:
          typeof value === "object" ? `${value.selected}px` : `${value || 0}px`,
      },
      unselected: {
        ...this.stateStylings.unselected,
        [property]:
          typeof value === "object"
            ? `${value.unselected}px`
            : `${value || 0}px`,
      },
    };
    return this;
  }

  public generateColorState({theme, property, value}: GenerateColorStateProps) {
    if (value === undefined) return this;
    this.stateStylings = {
      disabled:
        value === null
          ? {
              ...this.stateStylings.disabled,
              [property]: "transparent",
            }
          : {
              ...this.stateStylings.disabled,
              [property]:
                typeof value === "object"
                  ? this.handleStyle(
                      theme,
                      property,
                      "disabled",
                      value.disabled
                    )
                  : `#${theme.colors[value]}`,
            },
      selected:
        value === null
          ? {
              ...this.stateStylings.selected,
              [property]: "transparent",
            }
          : {
              ...this.stateStylings.selected,
              [property]:
                typeof value === "object"
                  ? this.handleStyle(
                      theme,
                      property,
                      "selected",
                      value.selected
                    )
                  : `#${theme.colors[value]}`,
            },
      unselected:
        value === null
          ? {
              ...this.stateStylings.unselected,
              [property]: "transparent",
            }
          : {
              ...this.stateStylings.unselected,
              [property]:
                typeof value === "object"
                  ? this.handleStyle(
                      theme,
                      property,
                      "unselected",
                      value.unselected
                    )
                  : `#${theme.colors[value]}`,
            },
    };
    return this;
  }

  public generateCommonState({property, value}: GenerateCommonStateProps) {
    this.stateStylings = {
      disabled: {
        ...this.stateStylings.disabled,
        [property]: typeof value === "object" ? value.disabled : value,
      },
      selected: {
        ...this.stateStylings.selected,
        [property]: typeof value === "object" ? value.selected : value,
      },
      unselected: {
        ...this.stateStylings.unselected,
        [property]: typeof value === "object" ? value.unselected : value,
      },
    };
    return this;
  }

  public generateBorderState({theme, value}: GenerateBorderStateProps) {
    if (value === null) {
      return this;
    }
    this.stateStylings = this.generateWidthState({
      property: "border-width",
      value: value.width,
    })
      .generateColorState({
        theme,
        property: "border-color",
        value: value.colors,
      })
      .generateCommonState({
        property: "border-style",
        value: value.style || "solid",
      }).val;
    return this;
  }
}

type Selector = "disabled" | "selected" | "unselected";
export type SelectorProps = {
  [key in Selector]: string | number;
};

export interface StateValueProps {
  unselected: StateStyle;
  selected: StateStyle;
  disabled: StateStyle;
}

export interface GenerateWidthStateProps {
  property: string;
  value?: StateStyle | number;
}

export interface GenerateColorStateProps {
  theme: ThemeValue;
  property: string;
  value: StateStyle | string;
}

export interface GenerateCommonStateProps {
  property: string;
  value: StateStyle | string;
}

export interface GenerateBorderStateProps {
  theme: ThemeValue;
  value: UnparsedBorder;
}

export {GenerateState, selectorGenerator};

export default {
  GenerateState,
  selectorGenerator,
};
