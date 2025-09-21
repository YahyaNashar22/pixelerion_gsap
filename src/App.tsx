import { useState } from "react";
import "./App.css";
import Wrapper from "./screens/Wrapper";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const isLightTheme = theme === "light";

  return (
    <>
      <Wrapper isLightTheme={isLightTheme} theme={theme} setTheme={setTheme} />
    </>
  );
}

export default App;
