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
          <nav className="menu">
            <div className="menu__item-box menu__item-box_left">
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive ? "menu__item active" : "menu__item"
                }
              >
                Главная
              </NavLink>
              <NavLink
                to="/history"
                className={(navData) =>
                  navData.isActive ? "menu__item active" : "menu__item"
                }
              >
                История
              </NavLink>
            </div>
            <div className="menu__item-box menu__item-box_right">
              <button onClick={() => toggleTheme(theme)}>
                {theme === "light" ? Icons().moon : Icons().sun}
              </button>
              <NavLink
                to="/user"
                className={(navData) =>
                  navData.isActive ? "menu__item active" : "menu__item"
                }
              >
                Username
                <UserSvg theme={theme} />
              </NavLink>
            </div>
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
