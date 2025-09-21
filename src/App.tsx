import { useEffect, useState } from "react";
import "./App.css";
import Wrapper from "./screens/Wrapper";
import Nav from "./components/Nav";
import FloatingNavBtn from "./components/FloatingNavBtn";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isHome, setIsHome] = useState<boolean>(false);
  const [isFloatingClicked, setIsFloatingClicked] = useState<boolean>(false);

  const isLightTheme = theme === "light";
  const isMobile = window.screen.width <= 768;

  const toggleFloatingClick = () => setIsFloatingClicked(!isFloatingClicked);

  useEffect(() => {
    const home = document.getElementById("home");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHome(true);
          } else {
            setIsHome(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (home) observer.observe(home);
  }, [isHome]);

  return (
    <>
      <Wrapper isLightTheme={isLightTheme} theme={theme} setTheme={setTheme} />
      <Nav isHome={isHome || isFloatingClicked} />
      {isMobile && !isHome && (
        <FloatingNavBtn
          isClicked={isFloatingClicked}
          onClick={toggleFloatingClick}
        />
      )}
    </>
  );
}

export default App;
