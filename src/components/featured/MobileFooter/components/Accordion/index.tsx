import React from "react";
import styles from "./mobileFooter.module.scss";
import { ReactComponent as DownIcon } from "../../assets/down.svg";

export const Accordion = ({ title, menuItems }: any) => {
  const [isActive, setIsActive] = React.useState(false);
  const handleClickDown = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={styles.dropdown}>
      <>
        <div className={styles.dropdown_btn} onClick={handleClickDown}>
          {title} <DownIcon />{" "}
        </div>
        {isActive &&
          menuItems.map((items: string) => (
            <div className={styles.dropdown__content}>
              <div className={styles.dropdown__content_item}>
                <a>{items}</a>
              </div>
            </div>
          ))}
      </>
    </div>
  );
};
