import React from "react";
import { HeaderNavMenu } from "./components/HeaderNavMenu";
import { HeaderRightContent } from "./components/HeaderRightContent";
import { SearchBlock } from "./components/SearchBlock";

import styles from "./header.module.scss";

export const MarketHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.main}>
        <div className={styles.header__bottom}>
          <HeaderNavMenu />
          <SearchBlock />

          <HeaderRightContent />
        </div>
      </div>
    </header>
  );
};
