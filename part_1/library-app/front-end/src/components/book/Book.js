import React, { useState } from "react";

import axios from "axios";

export const Book = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [pages, setpages] = useState("");
  const [publisher, setpublisher] = useState("");
  const [value, setvalue] = useState("");

  const titles = (t) => {
    settitle(t.target.value);
  };
  const authors = (a) => {
    setauthor(a.target.value);
  };
  const pagess = (p) => {
    setpages(p.target.value);
  };
  const publishers = (pu) => {
    setpublisher(pu.target.value);
  };
  const click = () => {
    axios
      .post("http://localhost:5000/book/add", {
        title: title,
        author: author,
        pages: pages,
        publisher: publisher,
      })
      .then((result) => {
        setvalue("succes add");
      });
  };
  return (
    <div>
      <input placeholder="title" onChange={titles} />
      <inpu placeholder="author" onChange={authors} />
      <input placeholder="pages" onChange={pagess} />
      <input placeholder="publisher" onChange={publishers} />
      <button onClick={click}>Submit</button>
      {value && <div>{value}</div>}
    </div>
  );
};
