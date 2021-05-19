export interface CssObject {
  [key: string]: string;
}

export interface StateStyle {
  unselected: string | number;
  selected: string | number;
  disabled: string | number;
}

/* ---------------unparsed-----------------------*/
export interface UnparsedBorder {
  width: number | StateStyle;
  colors: StateStyle;
  style?: string;
}

export interface UnparsedButton {
  view: string;
  stateBackgroundColors: StateStyle;
  stateTextStyles: StateStyle;
}

export interface UnparsedLabel {
  isUppercase: boolean;
  font: string;
  textColor: string;
  view: string;
}

export interface UnparsedView {
  cornerRadius: number | StateStyle;
  border: UnparsedBorder;
  backgroundColor: string | StateStyle;
}

/* ---------------parsed-----------------------*/
export interface ParsedView {
  unselected: CssObject;
  selected: CssObject;
  disabled: CssObject;
}

export interface ParsedLabels {
  [key: string]: CssObject;
}

export interface ParsedButtons {
  button: {
    unselected: CssObject;
    selected: CssObject;
    disabled: CssObject;
  };
  text: {
    unselected: CssObject;
    selected: CssObject;
    disabled: CssObject;
  };
}

/* ---------------parsed-----------------------*/

export interface Elements {
  views: {[key: string]: UnparsedView};
  labels: {[key: string]: UnparsedLabel};
  buttons: {[key: string]: UnparsedButton};
}

export interface ThemeValue {
  colors: object;
  elements: {
    [key: string]: object;
  };
  [key: string]: object;
}

export interface ParsedTheme {
  buttons: ParsedButtons;
  labels: ParsedLabels;
  views: ParsedView;
}
