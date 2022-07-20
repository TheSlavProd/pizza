import React from "react";
import { Link } from "react-router-dom";
import { SideMenu } from "../SideMenu";
import styles from "./HeaderNavMenu.module.scss";

export const HeaderNavMenu = () => {
  const [showSideMenu, setShowSideMenu] = React.useState<boolean>(false);
  const showCategoryList = () => {
    setShowSideMenu(!showSideMenu);
  };
  return (
    <div className={styles.headerMenu}>
      <SideMenu setShowSideMenu={setShowSideMenu} showSideMenu={showSideMenu} />

      <button
        className={styles.button}
        type="button"
        aria-label="Navigate on site"
        onClick={showCategoryList}
      >
        <span className="nav-element__burger-line"></span>
      </button>
      <Link to={"/"}>
        <img
          src="https://static.wbstatic.net/i/header/logo-v1.svg"
          alt="wildberries"
        />
      </Link>
    </div>
  );
};
