import React from "react";

import styles from "./footer.module.scss";
import { ReactComponent as VisaIcon } from "./assets/visa.svg";
import { ReactComponent as MasterCardIcon } from "./assets/masterCard.svg";
import { ReactComponent as MirIcon } from "./assets/mir.svg";

import googlePlay from "./assets/img/googleplay.png";
import appleStore from "./assets/img/appleStore.png";

export const MarketFooter = () => {
  return (
    <footer className={styles.content}>
      <div className={styles.content__footer}>
        <div className={styles.content__footer_nav}>
          <div className={styles.content__footer_nav_block}>
            <div className={styles.content__footer_nav_block_section}>
              <h3 className={styles.blockTitle}>Покупателям</h3>
              <ul className={styles.list}>
                <li>Как сделать заказ</li>
                <li>Способы оплаты</li>
                <li>Доставка</li>
                <li>Возврат товара</li>
                <li>Возврат денежных средств</li>
                <li>Правила продажи</li>
                <li>Правила пользования торговой площадкой</li>
                <li>Вопросы и ответы</li>
              </ul>
            </div>
            <div className={styles.content__footer_nav_block_section}>
              <div>
                <h3 className={styles.blockTitle}>Партнерам</h3>
                <ul className={styles.list}>
                  <li>Продавайте на Wildberries</li>
                  <li>Перевозчикам</li>
                  <li>Откройте пункт выдачи</li>
                  <li>Франшизный пункт выдачи</li>
                </ul>
              </div>
              <div>
                <h3 className={styles.blockTitle}>Наши проекты</h3>
                <ul className={styles.list}>
                  <li>WB Guru</li>
                  <li>Трудоустройство</li>
                  <li>Цифровые товары</li>
                </ul>
              </div>
            </div>
            <div className={styles.content__footer_nav_block_section}>
              <h3 className={styles.blockTitle}>Компания</h3>
              <ul className={styles.list}>
                <li>О нас</li>
                <li>Способы оплаты</li>
                <li>Реквизиты</li>
                <li>Пресс-центр</li>
                <li>Контакты</li>
                <li>Bug Bounty</li>
                <li>WB.Tech</li>
              </ul>
            </div>

            <div></div>
          </div>
          <div className={styles.content__footer_nav_social}>
            <div>
              <h3 className={styles.blockTitle}>Мы в соцсетях</h3>
              <ul className={styles.list}>
                <li>Вконтакте</li>
                <li>Одноклассники</li>
                <li>YouTube</li>
                <li>Телеграм</li>
              </ul>
            </div>
            <div>
              <h3 className={styles.blockTitle}>Мобильные устройства</h3>
              <ul className={styles.list}>
                <li>
                  <a
                    href="https://play.google.com/store/apps?hl=ru&gl=US"
                    target="_blank"
                  >
                    <img
                      className={styles.marketBtnImages}
                      src={googlePlay}
                    ></img>
                  </a>
                </li>
                <li>
                  <a
                    className={styles.appleStore}
                    href="https://www.apple.com/store"
                    target="_blank"
                  >
                    <img
                      className={styles.marketBtnImages}
                      src={appleStore}
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.content__footer_info}>
          <p className={styles.content__footer_info_par}>
            2004-2022 © Wildberries — модный интернет-магазин одежды, обуви и
            аксессуаров. Все права защищены. Доставка по всей России.
          </p>
          <div className={styles.content__footer_info_partner}>
            <a href="">Проверка совместимости</a>
          </div>
          <div className={styles.content__footer_info_paymant}>
            <ul>
              <li>
                <VisaIcon />
              </li>
              <li>
                <MasterCardIcon />
              </li>
              <li>
                <MirIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
