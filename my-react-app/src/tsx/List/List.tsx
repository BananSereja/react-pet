import React from "react";
import './List.css'
import ItemCard from "../ItemCard/itemCard";
function List () {
    return (
        <div className="grid_wrapper">
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
        </div>
    )
}

export default List