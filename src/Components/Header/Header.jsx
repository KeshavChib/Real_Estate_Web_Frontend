import React, { useEffect, useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(0);
  const [stl, setStl] = useState({});
  function changeVis() {
    // console.log("clicked");
    // console.log(menuOpened);
    if (menuOpened === 1) {
      setMenuOpened(0);
    } else setMenuOpened(1);
  }

  useEffect(() => {
    if (document.documentElement.clientWidth <= 800) {
      if (menuOpened === 0) {
        setStl({ right: "-100%" });
      } else setStl({ right: "4rem" });
    }
  }, [menuOpened]);

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="/logo.png" alt="logo" width={100} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(0)}>
          <div className="flexCenter h-menu" style={stl}>
            <a href="">Residencies</a>
            <a href="">Our Values</a>
            <a href="">Contact us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={changeVis}>
          <BiMenuAltRight />
        </div>
      </div>
    </section>
  );
};

export default Header;
