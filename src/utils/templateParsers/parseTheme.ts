import {Elements} from '@type/theme_types';
import buttonToCSS from './parseButtons';
import labelToCSS from './parseLabels';
import viewToCSS from './parseViews';

const parseTheme = (props: ParseThemeProps) => {
  const {fonts, colors, elements} = props;
  const views = viewToCSS({
    views: elements.views,
    theme: {fonts, colors, elements},
  });
  const labels = labelToCSS({
    labels: elements.labels,
    theme: {fonts, colors, elements},
  });
  const buttons = buttonToCSS({
    buttons: elements.buttons,
    views,
    labels,
    theme: {fonts, colors, elements},
  });
  return {views, labels, buttons};
};

interface ParseThemeProps {
  fonts: object;
  colors: object;
  elements: Elements;
}

export default parseTheme;
