import React from 'react'
import './App.css'
import Header from '../Header/Header'
import FilterBlock from '../FilterBlock/FilterBlock'
import List from '../List/List'
function App() {

  return (
    <div className="App">
      <Header />

      <div className='used_space'>
      <FilterBlock /> 
      <div>
      <List />
      </div>
      </div>

    </div>
  )
}

export default App
