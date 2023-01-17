import "./itemCard.css";
import React from "react";

function ItemCard() {
  return (
    <div className="containerCard">
      <div className="wrapperCard">
        <div className="halfs">
          <div className="img_container">
            <img
              className="img"
              src="https://cdn.ananasposter.ru/image/cache/catalog/poster/mult/83/10964-1000x830.jpg"
            />
          </div>

          <div className="right">
            <div className="header_card">
              <div>Рейтинг:пенис</div>
              <button className="btn_star">✰</button>
              <button className="btn_favorit">⌂</button>
            </div>

            <div className="name_card"> asdasdasdasd asd asd asdasdasdasd</div>
            <button className="button_info">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
