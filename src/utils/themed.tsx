import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components';
import theme from '../theme';
import {ThemeStore} from '@config/ThemeContext';

const themed = (component: React.ReactNode) =>
  renderer.create(
    <ThemeStore>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </ThemeStore>,
  );

export default themed;
