import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Landing from "./Landing";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import WhatWeDo from "./WhatWeDo";

import useHorizontalScroll from "../hooks/useHorizontalScroll";

const Wrapper = () => {
  const scrollRef = useHorizontalScroll();
  return (
    <main id="wrapper" ref={scrollRef}>
      <Landing />
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
