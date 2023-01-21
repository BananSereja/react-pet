import "./FilterSelector.css";
import React, { useState, useEffect } from "react";
import { filterList } from "../../../ts/itemList/itemList";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

function FilterSelector() {
  const [currentSelect, SetCurrentSelect] = useState("Сначала популярные");
  const list = useSelector((state: { list: [] }) => state.list);
  const dispatch = useDispatch();

  const currentListPop = [...list].sort(
    (a: { popularity: number }, b: { popularity: number }) =>
      b.popularity - a.popularity
  );

  const currentListVote = [...list].sort(
    (a: { vote_average: number }, b: { vote_average: number }) =>
      b.vote_average - a.vote_average
  );

  useEffect(() => {
    if (currentSelect === "Сначала популярные") {
      dispatch({ type: "FILMS_LIST", payload: currentListPop });
    } else if (currentSelect === "Сначала менее популярные") {
      dispatch({ type: "FILMS_LIST", payload: currentListPop.reverse() });
    } else if (currentSelect === "Высокий рейтинг") {
      dispatch({ type: "FILMS_LIST", payload: currentListVote });
    } else if (currentSelect === "Низкий рейтинг") {
      dispatch({ type: "FILMS_LIST", payload: currentListVote.reverse() });
    }
  }, [currentSelect]);

  const handleSelect = (e: { target: { value: string } }) => {
    SetCurrentSelect(e.target.value);
    console.log()
  };

  return (
    <select value={currentSelect} onChange={(e) => handleSelect(e)} className="filter_selector">
      {filterList.map((item) => (
        <option  key={nanoid()}>{item}</option>
      ))}
    </select>
  );
}

export default FilterSelector;
