const Theme = {
  color: {
    transparent: "rgba(0, 0, 0, 0)",

    white: "#ffffff",
    black: "#111111",

    gray: "#333333",
    dark: "#2a2a2a",
    darker: "#1e1e1e",
    darkAndDarker: "#1f1f1f",
    darkblue: "#1f2f5f",

    whitish: "#eeeeee",
    whitesmoke: "#dfdfdf",
    moonlight: "#fefcd7",
  },
};

const darkTheme = {
  // Nav
  navbar: Theme.color.dark,
  navbox: Theme.color.darkAndDarker,
  navbarText: Theme.color.whitish,
  shadow: Theme.color.moonlight,
  hamburger: Theme.color.whitesmoke,

  // Toggle
  toggle: Theme.color.moonlight,

  // Link Tree
  linkStart: Theme.color.darker,
  linkEnd: Theme.color.darker,
  linkItem: Theme.color.gray,
  linkText: Theme.color.white,
  linkTextHover: Theme.color.black,
  linkHover: Theme.color.moonlight,
};

const lightTheme = {
  // Nav
  navbar: Theme.color.white,
  navbox: Theme.color.white,
  navbarText: Theme.color.black,
  shadow: Theme.color.transparent,
  hamburger: Theme.color.black,

  // Toggle
  toggle: Theme.color.darker,

  // Link Tree
  linkStart: Theme.color.darkblue,
  linkEnd: Theme.color.darker,
  linkItem: Theme.color.white,
  linkText: Theme.color.black,
  linkTextHover: Theme.color.white,
  linkHover: Theme.color.darker,
};

export { darkTheme, lightTheme };
