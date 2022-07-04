import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectSort, setSortType } from "../../redux/slices/filterSlice";

type ListItem = {
  name: string;
  sortProp: string;
};
export const listType: ListItem[] = [
  { name: "популярности (DESC)", sortProp: "rating" },
  { name: "популярности (ASC)", sortProp: "-rating" },
  { name: "цене (DESC)", sortProp: "price" },
  { name: "цене (ASC)", sortProp: "-price" },
  { name: "алфавиту (DESC)", sortProp: "title" },
  { name: "алфавиту (ASC)", sortProp: "-title" },
];

export const Sort = () => {
  const [sortOpen, setSortOpen] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);
  const sortType = useSelector(selectSort);

  const dispach = useDispatch();
  const onClickListItem = (obj: ListItem) => {
    dispach(setSortType(obj));
    setSortOpen((prev) => !prev);
  };

  React.useEffect(() => {
    const handleClick = (event: any) => {
      if (!event.path.includes(sortRef.current)) {
        setSortOpen(false);
      }
    };
    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setSortOpen((prev) => !prev)}>
          {sortType.name}
        </span>
      </div>
      {sortOpen && (
        <div className="sort__popup">
          <ul>
            {listType.map((obj, index) => (
              <li
                key={index}
                onClick={() => onClickListItem(obj)}
                className={sortType.sortProp === obj.sortProp ? "active" : ""}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
