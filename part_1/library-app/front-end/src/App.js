import React from "react";
import {Route} from "react-router-dom";
import {Book} from "./components/book/Book"
import "./App.css";

const App = () => {
  return (
    <>
      <h1>App Component</h1>
      <Route path="/library/create_book" component={Book}/>
    </>
  );
};

export default App;
