import "./itemCard.css";
import React from "react";


export interface ItemCardInterface {
  title: string;
  vote_average: number;
  url: string;
}

function ItemCard({url,title,vote_average}: ItemCardInterface) {
  const img = `https://image.tmdb.org/t/p/w500/${url}`;

  return (
    <div  className="card_wrapper">
      <img className="card_img" src={img} />
      <div className="card_title">{title}</div>

      <div className="card_rating">
        <div className="rating">Рейтинг:{vote_average}</div>
        <button className="btn_star"></button>
        <button className="btn_book"></button>
      </div>

      <div className="more_info">Подробнее...</div>
    </div>
  );
}

export default ItemCard;
