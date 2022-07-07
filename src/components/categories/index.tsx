import React from "react";

type TCategory = string;
const catregories: TCategory[] = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

type TProps = {
  value: number;
  onChangeCategory: (index: number) => void;
};
const Categories: React.FC<TProps> = ({ value, onChangeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {catregories.map((catregorieName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? "active" : ""}
          >
            {catregorieName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Categories);
