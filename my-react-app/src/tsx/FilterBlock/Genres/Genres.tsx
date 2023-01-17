import "./Genres.css";
import { nanoid } from "nanoid";
import React from "react";
import { genresList } from "../../../ts/itemList/itemList";

function Genres() {
  const list = genresList.map((item) => (
    <div key={nanoid()} className='genres_wrapper'>
      <input className="genres_check" type="checkbox"></input>
      <p >{item}</p>
    </div>
  ));
  return list;
}

export default Genres;
