import getThemeData from "../theme";

const Landing = ({
  isLightTheme,
  theme,
  setTheme,
}: {
  isLightTheme: boolean;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}) => {
  const { pcStyles, landingBgStyles } = getThemeData({ isLightTheme });

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <section id="landing" className="screen" style={landingBgStyles}>
      <div style={pcStyles} onClick={toggleTheme}></div>
    </section>
  );
};

export default Landing;
