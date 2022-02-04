export default {
  border: {
    radius: "0.4rem",
  },
  font: {
    family: {
      nunito: "'Nunito Sans', sans-serif",
      inter: "'Inter', sans-serif",
      azonix: "'Azonix', sans-serif",
      doheyon: "'Do Hyeon', sans-serif",
      josefin: "'Josefin Sans', sans-serif",
    },
    italic: 'italic',
    normal: 400,
    bold: 600,
  },
  sizes: {
    xxsmall: "1rem",
    xsmall: "1.2rem",
    small: "1.4rem",
    medium: "1.6rem",
    large: "1.8rem",
    xlarge: "2.0rem",
    xxlarge: "2.4rem",
    xxxlarge: "2.8rem",
  },
  spacings: {
    xxxsmall: "0.5rem",
    xxsmall: "1rem",
    xsmall: "1.5rem",
    small: "2rem",
    medium: "3rem",
    large: "4rem",
    xlarge: "5rem",
    xxlarge: "6rem",
  },
  colors: {
    white: "#fff",
    black: "#000",
    error: "#FF6262",
    primary: "#3178c6",
    secondary: "#EFC9AF",
  },
  breakpoints: {
    mobile: "600px",
    ipad: "768px",
    smallTablet: "992px",
    tablet: "1024px",
    desktop: "1200px",
    largeDestkop: "1640px",
  },
} as const;
