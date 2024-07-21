import React from "react";

const NewSingle = ({ item }) => {
  return (
    <div className="col s4">
      <div className="card medium">
        <div className="card-image">
          <img src={item.urlToImage} alt={item.source.name} />
          <span className="card-title">{item.source.name}</span>
        </div>
        <div className="card-content">
          <p>{item.title}</p>
        </div>
        <div className="card-action">
          <a href={item.url} target="blank" rel="noreferrer">
            Full Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewSingle;

//Reusable component
