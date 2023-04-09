import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import UserSvg from "../components/userSvg";
import Icons from "../assets/img/svg/icons";
import useTheme from "../hooks/useTheme";

const Layout = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (currentTheme) => {
    if (currentTheme === "light") {
      setTheme("dark");
    } else if (currentTheme === "dark") {
      setTheme("light");
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul className="menu">
              <div className="menu__item-box menu__item-box_left">
                <li className="menu__item">
                  <NavLink to="/">Главная</NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to="/history">История</NavLink>
                </li>
              </div>
              <div className="menu__item-box menu__item-box_right">
                <li className="menu__item" onClick={() => toggleTheme(theme)}>
                  {theme === "light" ? Icons().moon : Icons().sun}
                </li>
                <li className="menu__item">
                  <NavLink to="/user">
                    Username
                    <UserSvg theme={theme} />
                  </NavLink>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
