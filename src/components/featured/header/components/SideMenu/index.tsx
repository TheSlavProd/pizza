import React from "react";
import styles from "./sideMenu.module.scss";
import { ReactComponent as CloseIcon } from "./assets/close.svg";
import { type } from "@testing-library/user-event/dist/type";
import classnames from "classnames";
import { useOutsideClick } from "@chakra-ui/react";

interface ICategoryList {
  id: number;
  category: string;
}

const CategoryList: ICategoryList[] = [
  {
    id: 1,
    category: "Женщинам",
  },
  {
    id: 1,
    category: "Обувь",
  },
  {
    id: 1,
    category: "Детям",
  },
  {
    id: 1,
    category: "Мужчинам",
  },
  {
    id: 1,
    category: "Дом",
  },
  {
    id: 1,
    category: "Красота",
  },
  {
    id: 1,
    category: "Аксессуары",
  },
  {
    id: 1,
    category: "Электроника",
  },
  {
    id: 1,
    category: "Игрушки",
  },
  {
    id: 1,
    category: "Товары для взрослых",
  },
  {
    id: 1,
    category: "Продукты",
  },
  {
    id: 1,
    category: "Бытовая техника",
  },
  {
    id: 1,
    category: "Зоотовары",
  },
  {
    id: 1,
    category: "Спорт",
  },
  {
    id: 1,
    category: "Автотовары",
  },
  {
    id: 1,
    category: "Книги",
  },
  {
    id: 1,
    category: "Premium",
  },
  {
    id: 1,
    category: "Ювелирные изделия",
  },
  {
    id: 1,
    category: "Для ремонта",
  },
  {
    id: 1,
    category: "Мебель",
  },
  {
    id: 1,
    category: "Алкоголь",
  },
  {
    id: 1,
    category: "Сад и дача",
  },
  {
    id: 1,
    category: "Здоровье",
  },
  {
    id: 1,
    category: "Канцтовары",
  },
  {
    id: 1,
    category: "Цифровые товары",
  },
  {
    id: 1,
    category: " Экспресс-доставка",
  },
  {
    id: 1,
    category: "Акции",
  },
  {
    id: 1,
    category: "Авиабилеты",
  },
  {
    id: 1,
    category: "Бренды",
  },
  {
    id: 1,
    category: "Видеообзоры",
  },
];

interface IProps {
  showSideMenu: boolean;
  setShowSideMenu: (show: boolean) => void;
}

export const SideMenu: React.FC<IProps> = ({
  setShowSideMenu,
  showSideMenu,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const closeMenu = () => {
    setShowSideMenu(false);
  };

  useOutsideClick({
    ref: ref,
    handler: () => setShowSideMenu(false),
  });

  return (
    <>
      {showSideMenu && <div className={styles.overlay}></div>}

      <div
        ref={ref}
        className={classnames(styles.content, {
          [styles.closeContent]: !showSideMenu,
          [styles.showContent]: showSideMenu,
        })}
      >
        <div className={styles.content__main}>
          <ul>
            {CategoryList.map((item) => (
              <li key={item.id} className={styles.content__main__item}>
                <a className={styles.content__main__item__link}>
                  {item.category}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <span>
          <CloseIcon onClick={closeMenu} />
        </span>
      </div>
    </>
  );
};
