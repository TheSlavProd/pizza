import React from "react";

import qs from "qs";
import Skeleton from "../../components/pizzaBlock/Skeleton";

import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  setCategoryId,
  setFilters,
} from "../../redux/slices/filterSlice";
import { fetchPizzas, selectPizza } from "../../redux/slices/pizzaSlice";
import { Categories } from "../../components/categories";
import { Pagination } from "../../components/pagination";
import { PizzaBlock } from "../../components/pizzaBlock";
import { Sort } from "../../components/sort";
import { useLocation, useNavigate } from "react-router-dom";
import { listType } from "../../components/sort";

export const Home: React.FC = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isSearchRef = React.useRef(false);
  const isMountedRef = React.useRef(false);

  const { items, status } = useSelector(selectPizza);

  const { categoryId, sortType, currentPage, inputValue } =
    useSelector(selectFilter);

  const category = categoryId > 0 ? `&category=${categoryId}` : "";
  const sortBy = sortType.sortProp.replace("-", "");
  const order = sortType.sortProp.includes("-") ? "asc" : "desc";
  const search = inputValue ? `&search=${inputValue}` : "";

  const getPizzas = async () => {
    dispach(
      //@ts-ignore
      fetchPizzas({ category, sortBy, order, search, currentPage })
    );
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    if (location.search) {
      const parse = qs.parse(location.search.substring(1));
      const sortType = listType.find((obj) => obj.sortProp === parse.sortBy);
      dispach(setFilters({ ...parse, sortType }));
      isSearchRef.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (!isSearchRef.current) {
      getPizzas();
    }
    isSearchRef.current = false;
  }, [categoryId, sortType, inputValue, currentPage]);

  React.useEffect(() => {
    if (isMountedRef.current) {
      const queryString = qs.stringify({
        sortBy,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMountedRef.current = true;
  }, [categoryId, sortType, inputValue, currentPage]);

  const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const pizzasList = items.map((obj: any) => (
    <PizzaBlock key={obj.id} {...obj} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i: number) => {
            dispach(setCategoryId(i));
          }}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      {status === "error" ? (
        <div className="content__info">
          <h2>Пицц не найдено 😕</h2>
          <p>
            К сожелению пицц не найдено.
            <br />
            Просим ваши извинения, мы пытаемся починить сайт.
          </p>
        </div>
      ) : status === "loading" ? (
        skeleton
      ) : (
        <div className="content__items">{pizzasList}</div>
      )}

      <Pagination />
    </div>
  );
};
