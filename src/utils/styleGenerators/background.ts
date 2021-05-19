import {css} from 'styled-components';
import {normalizeColor, getRGBA} from './color';

export const backgroundStyle = (backgroundArg, theme) => {
  if (typeof backgroundArg === 'object') {
    const styles = [];

    if (backgroundArg.image) {
      const color = 'inherit';

      styles.push(css`
        background-image: ${backgroundArg.image};
        background-repeat: ${backgroundArg.repeat || 'no-repeat'};
        background-position: ${backgroundArg.position || 'center center'};
        background-size: ${backgroundArg.size || 'cover'};
        color: ${color};
      `);
    }

    if (backgroundArg.color) {
      const color = normalizeColor(backgroundArg.color, theme);
      const backgroundColor =
        getRGBA(
          color,
          backgroundArg.opacity === true
            ? theme.global.opacity.medium
            : theme.global.opacity[backgroundArg.opacity] ||
                backgroundArg.opacity,
        ) || color;
      styles.push(css`
        background-color: ${backgroundColor};
      `);
    }

    return styles;
  }

  if (backgroundArg) {
    if (backgroundArg.lastIndexOf('url', 0) === 0) {
      return css`
        background: ${backgroundArg} no-repeat center center;
        background-size: cover;
      `;
    }

    const backgroundColor = normalizeColor(backgroundArg, theme);
    if (backgroundColor)
      return css`
        background: ${backgroundArg};
      `;
  }

  return undefined;
};

export const activeStyle = css`
  ${props =>
    backgroundStyle(
      normalizeColor(props.theme.global.active.background, props.theme),
      props.theme,
      props.theme.global.active.color,
    )}
`;

export const selectedStyle = css`
  ${props =>
    backgroundStyle(
      normalizeColor(props.theme.global.selected.background, props.theme),
      props.theme,
      props.theme.global.selected.color,
    )}
`;

export const getHoverIndicatorStyle = (hoverIndicator, theme) => {
  let background;
  if (hoverIndicator === true || hoverIndicator === 'background') {
    ({background} = theme.global.hover);
  } else {
    background = hoverIndicator;
  }
  return css`
    ${backgroundStyle(background, theme, theme.global.hover.color)}
  `;
};
