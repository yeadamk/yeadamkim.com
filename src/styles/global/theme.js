const Theme = {
  color: {
    white: "#ffffff",
    black: "#111111",
    dark: "#2a2a2a",
    darker: "#1f1f1f",
    whitish: "#eeeeee",
    whitesmoke: "#dfdfdf",
  },
};

const darkTheme = {
  // Nav
  navbar: Theme.color.darker,
  navbox: Theme.color.dark,
  navbarText: Theme.color.whitish,
  hamburger: Theme.color.whitesmoke,

  // Toggle
  toggle: Theme.color.whitesmoke,
};

const lightTheme = {
  // Nav
  navbar: Theme.color.white,
  navbox: Theme.color.white,
  navbarText: Theme.color.black,
  hamburger: Theme.color.black,

  // Toggle
  toggle: Theme.color.white,
};

export { darkTheme, lightTheme };
