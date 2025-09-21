import { useEffect, useState } from "react";
import "./App.css";
import Wrapper from "./screens/Wrapper";
import Nav from "./components/Nav";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isHome, setIsHome] = useState<boolean>(false);

  const isLightTheme = theme === "light";

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
      <Nav isHome={isHome} />
    </>
  );
}

export default App;
