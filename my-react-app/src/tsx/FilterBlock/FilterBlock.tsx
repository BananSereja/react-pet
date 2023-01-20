import React from "react";
import Genres from "./Genres/Genres";
import "./FilterBlock.css";
import ReleaseYear from "./ReleaseYear/ReleaseYear";
import FilterSelector from "./FilterSelector/FilterSelector";
import Pagination from "./Pagination/Pagination";
function FilterBlock() {
  return (
    <div className="filter_wrapper">
      <div className="filter_header">Фильтры:</div>
      <button className="filter_reset">Сбросить все фильтры</button>

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
