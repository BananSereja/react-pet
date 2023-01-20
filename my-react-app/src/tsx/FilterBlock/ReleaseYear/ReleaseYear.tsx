import React, {useState} from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import "./ReleaseYear.css";
import { yearsList } from "../../../ts/itemList/itemList";

function ReleaseYear() {
  // const [currentYear, setCurrentYear] = useState(2022)
  // const list = useSelector((state:{info:{films: []}}) => state.info.films)
  // const dispatch = useDispatch

  // const handleYear = (e) => {

  // }
  return (
    <select className="filter_selector">
      {yearsList.map((item) => (
        <option key={nanoid()}>{item}</option>
      ))}
    </select>
  );
}

export default ReleaseYear;
