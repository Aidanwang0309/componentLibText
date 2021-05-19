import {ParsedView, ThemeValue, UnparsedView} from '@type/theme_types';
import {defaultView} from './defaultTheme';
import {GenerateState} from './utils';

const parseView = (value: UnparsedView, theme: ThemeValue) => {
  const stateStylings = new GenerateState();
  const viewStateStylings = stateStylings
    .generateWidthState({property: 'border-radius', value: value.cornerRadius})
    .generateColorState({
      theme,
      property: 'background-color',
      value: value.backgroundColor,
    })
    .generateBorderState({theme, value: value.border}).val;

  return viewStateStylings;
};

const generateViewCss = ({views, theme}: ParseViewsProps): ParsedView => {
  views = {...views, defaultView};
  const parsedValues = Object.entries(views).reduce(
    (accu, [viewName, value]) => {
      if (!value) {
        return accu;
      }
      accu[viewName] = parseView(value, theme);
      return accu;
    },
    {} as ParsedView,
  );
  return parsedValues;
};

export interface ParseViewsProps {
  views: {[key: string]: UnparsedView};
  theme: ThemeValue;
}

export {parseView};
export default generateViewCss;
