import React from "react";

const Card = ({ children }) => {
  return (
    <div className="card d-flex flex-column align-items-start m-3">
      {children}
    </div>
  );
};

export default Card;
