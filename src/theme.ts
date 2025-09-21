import pc_light from "./assets/images/pc.svg";
import pc_dark from "./assets/images/pc_dark.svg";

import lightCursor from "./assets/cursors/light.png";
import lightHoverCursor from "./assets/cursors/light_hover.png";

import darkCursor from "./assets/cursors/dark.png";
import darkHoverCursor from "./assets/cursors/dark_hover.png";

interface ITheme {
  isLightTheme: boolean;
}

function getThemeData({ isLightTheme }: ITheme) {
  const theme = {
    cursorStyles: {
      normal: `url(${
        isLightTheme ? lightCursor : darkCursor
      }), auto !important`,
      hover: `url(${
        isLightTheme ? lightHoverCursor : darkHoverCursor
      }), auto !important`,
    },

    pcStyles: {
      backgroundImage: isLightTheme ? `url(${pc_light})` : `url(${pc_dark})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      height: "100%",
      width: "100%",
      transition: "0.05s ease-in-out",
    },

    landingBgStyles: {
      backgroundColor: isLightTheme ? "var(--white)" : "var(--black)",
      backgroundImage:
        "linear-gradient(to right, var(--grid) 1px, transparent 1px ), linear-gradient(to bottom, var(--grid) 1px, transparent 1px ) ",
      backgroundSize: "100px 100px",
      transition: "0.05s ease-in-out",
    },
  };

  return theme;
}

export default getThemeData;
