import { useEffect, useState } from "react";
import logo from "../assets/icons/logo.png";

interface NavProps {
  isHome: boolean;
}

const Nav = ({ isHome }: NavProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (window.screen.width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <nav id={isHome ? "nav-fixed" : "nav"}>
      <a className="nav-link" href="#what-we-do">
        Our Expertise
      </a>
      <a className="nav-link" href="#about">
        About us
      </a>
      <a className="nav-link" href="#home">
        <img
          id="nav-logo"
          src={logo}
          alt="logo"
          width={isMobile ? 70 : 100}
          height={isMobile ? 70 : 100}
        />
      </a>
      <a className="nav-link" href="#projects">
        Projects
      </a>
      <a className="nav-link" href="#contact">
        Contact
      </a>
    </nav>
  );
};

export default Nav;
