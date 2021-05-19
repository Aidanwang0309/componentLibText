import {css} from '@utils/styled-components';

export const breakpointStyle = (breakpoint, content) => css`
  @media only screen ${breakpoint.value &&
    `and (max-width: ${breakpoint.value}px)`} {
    ${content};
  }
`;
