import React from "react";
import {Route} from "react-router-dom";
import {Book} from "./components/book/Book"
import {AllBook} from "./components/allbook/AllBook"
import {BookByid} from "./components/bookbyid/BookById"
import "./App.css";

const App = () => {
  return (
    <>
      <h1>App Component</h1>
      <Route path="/library/create_book" component={Book}/>
      <Route path="/library" component={AllBook}/>
      <Route path="/library/:book_id" component={BookByid}/>
    </>
  );
};

export default App;
