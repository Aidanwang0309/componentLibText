interface Colors {
  disabledColor: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
}

export interface ThemeInterface {
  colors: Colors;
  breakpoints: object;
  global: {
    colors: Colors;
    opacity: {
      strong: number;
      medium: number;
      weak: number;
    };
  };
}

const baseSpacing = 24;

const theme: ThemeInterface = {
  global: {
    colors: {
      disabledColor: '#bdc3c7',
      primaryColor: '#FFC729',
      secondaryColor: '#FFC729',
      tertiaryColor: '#FFC729',
    },
    opacity: {
      strong: 0.8,
      medium: 0.4,
      weak: 0.1,
    },
  },

  colors: {
    disabledColor: '#bdc3c7',
    primaryColor: '#FFC729',
    secondaryColor: '#FFC729',
    tertiaryColor: '#FFC729',
  },
  breakpoints: {
    small: {
      value: baseSpacing * 32, // 768
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: `${baseSpacing / 6}px`, // 4
        large: `${baseSpacing / 4}px`, // 6
        xlarge: `${baseSpacing / 2}px`, // 12
      },
      edgeSize: {
        none: '0px',
        hair: '1px', // for Chart
        xxsmall: '2px',
        xsmall: `${baseSpacing / 8}px`, // 3
        small: `${baseSpacing / 4}px`, // 6
        medium: `${baseSpacing / 2}px`, // 12
        large: `${baseSpacing}px`, // 24
        xlarge: `${baseSpacing * 2}px`, // 48
      },
      size: {
        xxsmall: `${baseSpacing}px`, // 24
        xsmall: `${baseSpacing * 2}px`, // 48
        small: `${baseSpacing * 4}px`, // 96
        medium: `${baseSpacing * 8}px`, // 192
        large: `${baseSpacing * 16}px`, // 384
        xlarge: `${baseSpacing * 32}px`, // 768
        full: '100%',
      },
    },
    medium: {
      value: baseSpacing * 64, // 1536
    },
    large: {}, // anything above 'medium'
  },
};

export default theme;
