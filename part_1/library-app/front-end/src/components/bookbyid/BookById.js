import React, { useState } from "react";

import axios from "axios";

export const BookByid = () => {
  const [value, setvalue] = useState();

  const click = () => {
    axios.get("http://localhost:5000/book/id").then((result) => {
      setvalue(result.data.AllBook);
    });
  };
  return (
    <div>
      <button onClick={click}>bookbyid</button>
      {value &&
        value.map((element) => {
          return (
            <div key={element._id}>
              <p>{element.title}</p>
              <p>{element.author}</p>
              <p>{element.pages}</p>
              <p>{element.publisher}</p>
            </div>
          );
        })}
    </div>
  );
};
