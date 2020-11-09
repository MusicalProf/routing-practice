import React from "react";
import Anger from "./Anger.png";

const NumbersAndWords = (props) => {
  return (
    <div className='mt-3'>
      {!isNaN(props.item) ? (
        <h2>The number is: {props.item}</h2>
      ) : (
        <div>
          <h2>You gave me a word and not a number!! </h2>
          <img
            src={Anger}
            alt="Anger"
            style={{ width: "200px", height: "200px"}}
            className="img-thumbnail"
          ></img>
          <h2>The word is: {props.item}!</h2>
        </div>
      )}
    </div>
  );
};
export default NumbersAndWords;
