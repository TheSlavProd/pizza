import React from "react";
import { ReactComponent as AddressIcon } from "./assets/adress.svg";
import { ReactComponent as UserIcon } from "./assets/user.svg";
import { ReactComponent as CartIcon } from "./assets/cart.svg";
import styles from "./headerRightContent.module.scss";
import { useSelector } from "react-redux";
import { selectCart } from "../../../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export const HeaderRightContent = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  return (
    <div className={styles.main}>
      <div>
        <a href="" className={styles.rightContentLink}>
          <span>
            <AddressIcon />
          </span>
          <br />
          Адреса
        </a>
      </div>
      <div>
        <a href="" className={styles.rightContentLink}>
          <span>
            <UserIcon />
          </span>
          <br />
          Войти
        </a>
      </div>
      <div>
        <Link to={"/cart"} className={styles.rightContentLink}>
          <span className={styles.cart_span}>
            <CartIcon />
            <span className={styles.basket_notify}>{totalCount}</span>
          </span>
          <br />
          Корзина
        </Link>
      </div>
    </div>
  );
};
