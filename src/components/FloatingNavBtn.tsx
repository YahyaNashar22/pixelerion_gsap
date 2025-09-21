import logo from "../assets/icons/logo.png";

interface FloatingNavBtnProps {
  isClicked: boolean;
  onClick: () => void;
}

const FloatingNavBtn = ({ isClicked, onClick }: FloatingNavBtnProps) => {
  return (
    <img
      style={{
        transform: isClicked ? "translateY(-100px)" : undefined,
        transition: "0.6s ease-in-out",
      }}
      onClick={onClick}
      src={logo}
      alt="logo"
      id="floating-nav-btn"
    ></img>
  );
};

export default FloatingNavBtn;
