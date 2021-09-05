import React, { useState } from "react";

import axios from "axios";

export const AllBook = () => {
  const [value, setvalue] = useState();

  const click = () => {
    axios.get("http://localhost:5000/book/allbook").then((result) => {
      setvalue(result.data.AllBook);
    });
  };
  return (
    <div>
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
