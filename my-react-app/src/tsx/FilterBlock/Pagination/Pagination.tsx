import "./Pagination.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemCardItem } from "../../../ts/itemList/itemList";

function Pagination() {
  const [checkPage, setCheckPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [visibleItem] = useState(10)
  const list = useSelector((state:{list: []}) => state.list)
 
  const dispatch = useDispatch()
  
  const lastPageIndex = currentPage * visibleItem
  const firstPageIndex = lastPageIndex - visibleItem 
  const currentList = list.slice(firstPageIndex, lastPageIndex)

  

  const handlePagePlus = () => {
    setCurrentPage(currentPage => currentPage + 1)
    dispatch({type:'PAGINATION_LIST',payload:currentList})
    setCheckPage(checkPage => checkPage + 1)
  }

  const handlePageSubtrack = () => {
    setCurrentPage(currentPage => currentPage - 1)
    dispatch({type:'PAGINATION_LIST',payload:currentList})
    setCheckPage(checkPage => checkPage - 1)
  }

  useEffect(() => {
    dispatch({type:'PAGINATION_LIST',payload:currentList})
  }, [list])
 

  return (
    <div>
    <div className="filter_btn">
      {checkPage === 0 ? <div className="btn_lock">Назад</div> : <button onClick={() => handlePageSubtrack()} className="btn">Назад</button>}
      {checkPage === 24 ? <div className="btn_lock">Вперед</div> : <button onClick={() => handlePagePlus()} className="btn">Вперед</button>}
    </div>
    <div className="number_page">{checkPage + 1} of 24</div>
    </div>
  );
}

export default Pagination;
