import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { itemCardItem } from "../../../ts/itemList/itemList";
import { useDispatch, useSelector } from "react-redux";
import "./ReleaseYear.css";
import { yearsList } from "../../../ts/itemList/itemList";
import format from "date-fns/format";
function ReleaseYear() {
  const [currentSelect, SetCurrentSelect] = useState('2020');
  const dispatch = useDispatch()
  const list = useSelector((state: { list: [] }) => state.list);
  // console.log(list)
  const filterYearsList = (year:string) => itemCardItem.filter(item => format(new Date(item.release_date), 'yyyy') === year)
  
  

  useEffect(() => {
    console.log(currentSelect)
    if (currentSelect === '2020'){
      dispatch({type: 'FILMS_LIST', payload: itemCardItem})
      dispatch({type: 'FILMS_LIST', payload: filterYearsList('2020')})
    } else if (currentSelect === '2019'){
      dispatch({type: 'FILMS_LIST', payload: itemCardItem})
      dispatch({type: 'FILMS_LIST', payload: filterYearsList('2019')})
    } else if (currentSelect === '2018') {
      dispatch({type: 'FILMS_LIST', payload: itemCardItem})
      dispatch({type: 'FILMS_LIST', payload: filterYearsList('2018')})
    } else if (currentSelect === '2017') {
      dispatch({type: 'FILMS_LIST', payload: itemCardItem})
      dispatch({type: 'FILMS_LIST', payload: filterYearsList('2017')})
    }
    console.log(list)
  },[currentSelect])


  const handleSelect = (e: { target: { value: string } }) => {
    SetCurrentSelect(e.target.value);
  };
  return (
    <select value={currentSelect} onChange={(e) => handleSelect(e)} className="filter_selector">
      {yearsList.map((item) => (
        <option key={nanoid()}>{item}</option>
      ))}
    </select>
  );
}

export default ReleaseYear;
