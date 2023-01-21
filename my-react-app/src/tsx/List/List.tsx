import React from "react";
import "./List.css";
import ItemCard from "../ItemCard/itemCard";
import { useSelector } from "react-redux";

function List() {

  interface cardInterface {
    id: number,
    poster_path: string,
    title:string,
    vote_average: number
  }

  const list:cardInterface[] = useSelector((state: {pagination:[]}) => state.pagination)
  

  return (
    <div className="grid_wrapper">
      {list.map((item) => (
        <ItemCard
          key={item.id}
          url={item.poster_path}
          title={item.title}
          vote_average={item.vote_average}
        />
      ))}
    </div>
  );
}

export default List;
