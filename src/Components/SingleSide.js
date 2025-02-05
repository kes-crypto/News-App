import React from "react";

//sidenews display 4 rows
const SingleSide = ({ item }) => {
  <div>
    <div className="divider"></div>
    <a href={item.url} target="_blank" rel="noreferrer">
      <div className="section">
        <h5>{item.source.name}</h5>
        <p>{item.title}</p>
      </div>
    </a>
  </div>;
};

export default SingleSide;
//Reusable component for Side News 4 cols.
