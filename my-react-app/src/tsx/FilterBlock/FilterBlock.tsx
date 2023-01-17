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

      <div className="">Сортировать по:</div>
      <select className="filter_selector">
        <FilterSelector />
      </select>

      <div>Год релиза:</div>
      <select className="filter_selector">
        <ReleaseYear />
      </select>

      <Genres />

      <Pagination />

      
    </div>
  );
}

export default FilterBlock;
