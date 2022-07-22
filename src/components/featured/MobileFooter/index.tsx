import React, { useEffect } from "react";
import styles from "./mobileFooter.module.scss";
import { ReactComponent as DownIcon } from "./assets/down.svg";
import { Accordion } from "./components/Accordion";

const FooterOptions = [
  {
    title: "Покупателям",
    menuItems: [
      "Как сделать заказ",
      "Способы оплаты",
      "Доставка",
      "Возврат товара",
      "Возврат денежных средств",
      "Правила продажи",
      "Правила пользования торговой площадкой",
      "Вопросы и ответы",
    ],
  },
  {
    title: "Партнерам",
    menuItems: [
      "Продавайте на Wildberries",
      "Перевозчикам",
      "Откройте пункт выдачи",
      "Франшизный пункт выдачи",
    ],
  },
  {
    title: "Наши проекты",
    menuItems: ["WB Guru", "Трудоустройство", "Цифровые товары"],
  },
  {
    title: "Компания",
    menuItems: [
      "О нас",
      "Реквизиты",
      "Пресс-центр",
      "Контакты",
      "Bug Bounty",
      "WB.Tech",
    ],
  },
];

export const MobileFooter = () => {
  return (
    <>
      {FooterOptions.map((item) => (
        <Accordion title={item.title} menuItems={item.menuItems} />
      ))}
    </>
  );
};
