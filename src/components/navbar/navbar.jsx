import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./navbar.styles";

const NavBar = ({ toggle }) => {
  const [ScroolNav, SetScroolNav] = useState(false);

  const ChangeNav = () => {
    if (window.scrollY >= 80) {
      SetScroolNav(true);
    } else {
      SetScroolNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <IconContext.Provider value={{ ccolor: "#fff" }}>
      <Nav ScroolNav={ScroolNav}>
        <NavContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Marvelous Banking
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLink>
            </NavItems>
            <NavItems>
              <NavLink
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Discover
              </NavLink>
            </NavItems>
            <NavItems>
              <NavLink
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLink>
            </NavItems>
            <NavItems>
              <NavLink
                to="register"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Register
              </NavLink>
            </NavItems>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Login</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
};
export default NavBar;
