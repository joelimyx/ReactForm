import React from "react";

export const Tile = (props) => {
  const values = Object.values(props.item);
  return (
    <div className="tile-container">
      {values.map((val, index) =>
        <p className={index === 0 ? 'tile-title' : 'tile'}>{val}</p>          
      )}
    </div>
  );
};
