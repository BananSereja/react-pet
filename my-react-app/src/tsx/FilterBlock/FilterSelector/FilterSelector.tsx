import "./FilterSelector.css";
import React, { useState, useEffect } from "react";
import { filterList } from "../../../ts/itemList/itemList";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

function FilterSelector() {
  const [currentSelect, SetCurrentSelect] = useState();
  const dispatch = useDispatch();
  const list = useSelector((state:{list:{films: []}}) => state.list.films);
// console.log(currentSelect)
  const currentList = list.sort(
    (a: { popularity: number }, b: { popularity: number }) =>
      a.popularity - b.popularity
  );
// console.log(currentList)
  useEffect(() => {
    if (currentSelect === "Сначала популярные") {
      dispatch({ type: "CARD_INFO", payload: currentList });
    } else if (currentSelect === "Сначала менее популярные") {
      dispatch({ type: "CARD_INFO", payload: currentList.reverse() });
    }
  }, [currentSelect]);
  

  const handleSelect = (e: { target: { value: string } }) => {
    SetCurrentSelect(e.target.value);
    console.log(currentSelect);
    console.log(list)
  };

  return (
    <select onChange={(e) => handleSelect(e)} className="filter_selector">
      {filterList.map((item) => (
        <option value={currentSelect} key={nanoid()}>{item}</option>
      ))}
    </select>
  );
}

export default FilterSelector;
