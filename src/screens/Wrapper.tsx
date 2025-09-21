import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Landing from "./Landing";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import WhatWeDo from "./WhatWeDo";

import type { CSSProperties } from "react";
import getThemeData from "../theme";

const Wrapper = ({
  isLightTheme,
  theme,
  setTheme,
}: {
  isLightTheme: boolean;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}) => {
  // TODO: turn this on when you want horizontal scroll
  // const scrollRef = useHorizontalScroll();

  const { cursorStyles } = getThemeData({ isLightTheme });

  return (
    <main
      id="wrapper"
      // ref={scrollRef}
      style={
        {
          "--cursor-normal": cursorStyles.normal,
          "--cursor-hover": cursorStyles.hover,
        } as CSSProperties
      }
    >
      <Landing isLightTheme={isLightTheme} theme={theme} setTheme={setTheme} />
      <Home />
      <WhatWeDo />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Wrapper;
