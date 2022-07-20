import React, { ChangeEvent } from "react";
import styles from "./searchBlock.module.scss";
import { ReactComponent as SearchIcon } from "./assets/search.svg";
import { ReactComponent as PictureIcon } from "./assets/picture.svg";
import { ReactComponent as DeleteIcon } from "./assets/delete.svg";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import {
  setCategoryId,
  setCurrentPage,
  setInputValue,
} from "../../../../../redux/slices/filterSlice";

export const SearchBlock = () => {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const dispach = useDispatch();

  const debounceInput = React.useCallback(
    debounce((event) => {
      //-----------------------
      dispach(setCategoryId(0));
      dispach(setCurrentPage(1));
      //-----------------------------------
      dispach(setInputValue(event.target.value));
    }, 500),
    []
  );

  const handleClearInput = () => {
    setValue("");
    dispach(setInputValue(""));
    inputRef.current?.focus();
  };

  const handleChangeInput = (event: any) => {
    setValue(event.target.value);
    debounceInput(event);
  };

  return (
    <div>
      <div className={styles.content}>
        <input
          ref={inputRef}
          value={value}
          className={styles.content__input}
          type="text"
          placeholder="я ищу..."
          onChange={handleChangeInput}
        />
        <span className={styles.content__search_icon}>
          <SearchIcon />
        </span>
        <span className={styles.content__picture_icon}>
          <PictureIcon />
        </span>
        {Boolean(value) && (
          <span
            onClick={handleClearInput}
            className={styles.content__delete_icon}
          >
            <DeleteIcon />
          </span>
        )}
      </div>
    </div>
  );
};
