import {ParsedLabels, ThemeValue, UnparsedLabel} from '@type/theme_types';

const parseLabel = (value: UnparsedLabel, theme: ThemeValue) => ({
  color: `#${theme.colors[value.textColor]}`,
  'font-family': theme.fonts[value.font].name,
  'font-size': `${theme.fonts[value.font].size}px`,
  'text-transform': value.isUppercase ? 'uppercase' : 'initial',
  "font-weight": `${theme.fonts[value.font].weight || 400}`,
  // view: value.view ? parseView(theme.elements.views[value.view], theme) : null,
});

const generateLabelCss = ({
  labels,
  theme,
}: GenerateLabelCssProps): ParsedLabels => {
  const parsedValues = Object.entries(labels).reduce((acc, [name, value]) => {
    if (!value) {
      return acc;
    }
    acc[name] = parseLabel(value, theme);
    return acc;
  }, {} as ParsedLabels);
  return parsedValues;
};

export interface GenerateLabelCssProps {
  labels: {[key: string]: UnparsedLabel};
  theme: ThemeValue;
}

export default generateLabelCss;
