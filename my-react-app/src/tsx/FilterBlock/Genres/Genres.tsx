import "./Genres.css";
useSelector;
import React from "react";
import { genresList } from "../../../ts/itemList/itemList";
import { useSelector } from "react-redux";

function Genres() {
  return (
    <div>
      {genresList.map((item) => (
        <div key={item.id} className="genres_wrapper">
          <input className="genres_check" type="checkbox"></input>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Genres;
