import {
  ParsedButtons,
  ParsedLabels,
  ParsedView,
  ThemeValue,
  UnparsedButton,
} from '@type/theme_types';
import {defaultButton} from './defaultTheme';
import {GenerateState} from './utils';

const parseButton = ({button, views, labels, theme}: ParseButtonProps) => {
  const stateStylings = new GenerateState(views[button.view]);
  const buttonStateStylings = stateStylings.generateColorState({
    theme,
    property: 'background-color',
    value: button.stateBackgroundColors,
  }).val;

  const textStateStylings = Object.entries(button.stateTextStyles).reduce(
    (accu, [key, value]) => {
      accu[key] = labels[value];
      return accu;
    },
    {},
  );
  return {
    button: buttonStateStylings,
    text: textStateStylings,
  };
};

const generateButtonCss = ({
  buttons,
  views,
  labels,
  theme,
}: GenerateButtonCssProps): ParsedButtons => {
  buttons = {...buttons, defaultButton};
  return Object.entries(buttons).reduce((accu, [name, rules]) => {
    accu[name] = parseButton({button: rules, views, labels, theme});
    return accu;
  }, {} as ParsedButtons);
};

export interface ParseButtonProps {
  button: UnparsedButton;
  views: ParsedView;
  labels: ParsedLabels;
  theme: ThemeValue;
}

export interface GenerateButtonCssProps {
  buttons: {[key: string]: UnparsedButton};
  views: ParsedView;
  labels: ParsedLabels;
  theme: ThemeValue;
}

export {parseButton};
export default generateButtonCss;
