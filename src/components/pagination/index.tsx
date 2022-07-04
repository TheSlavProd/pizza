import React from "react";

import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";
import { setCurrentPage } from "../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";

export const Pagination: React.FC = () => {
  const dispach = useDispatch();

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => {
        dispach(setCurrentPage(e.selected + 1));
      }}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
    />
  );
};
