import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "../../ts/redux/store";
import { ThemeButton } from "../Header/ThemeButtons/ThemeButton";
import Header from "../Header/Header";
import FilterBlock from "../FilterBlock/FilterBlock";
import List from "../List/List";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <ThemeButton />
        <div className="used_space">
          <FilterBlock />
          <List />
        </div>
      </Provider>
    </div>
  );
}

export default App;
