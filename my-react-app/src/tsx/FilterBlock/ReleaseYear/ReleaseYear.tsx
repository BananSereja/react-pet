import React from "react";
import { nanoid } from "nanoid";
import "./ReleaseYear.css";
import { yearsList } from "../../../ts/itemList/itemList";


function ReleaseYear() {
  const list = yearsList.map((item) => <option key={nanoid()}>{item}</option>);
  return list;
}

export default ReleaseYear;
