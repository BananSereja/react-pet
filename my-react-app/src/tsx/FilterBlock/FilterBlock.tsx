import React from "react";
import Genres from "./Genres/Genres";
import { itemCardItem } from "../../ts/itemList/itemList";
import { useSelector, useDispatch } from "react-redux";
import "./FilterBlock.css";
import ReleaseYear from "./ReleaseYear/ReleaseYear";
import FilterSelector from "./FilterSelector/FilterSelector";
import Pagination from "./Pagination/Pagination";
function FilterBlock() {
  const dispatch = useDispatch()
  const list = useSelector(state => state.list)

  const resetSelect = () => {
    dispatch({type: 'FILMS_LIST', payload: itemCardItem})
  }

  return (
    <div className="filter_wrapper">
      <div className="filter_header">Фильтры:</div>
      <button onClick={resetSelect} className="filter_reset">Сбросить все фильтры</button>

      <div>Сортировать по:</div>
      <FilterSelector />

      <div>Год релиза:</div>
      <ReleaseYear />

      <Genres />
      <Pagination />
    </div>
  );
}

export default FilterBlock;
