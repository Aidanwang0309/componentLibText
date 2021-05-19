import * as React from 'react';
import Color from './Color';
import theme from './index';

// const stories = storiesOf('Themes/Colors', module);

const colors = Object.keys(theme.colors).map((key) => (
  <Color name={key} key={key} color={theme.colors[key]} />
));

export const List = () => <React.Fragment>{colors}</React.Fragment>;
