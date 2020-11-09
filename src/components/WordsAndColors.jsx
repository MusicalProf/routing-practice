import React from "react";
import Anger from './Anger.png';

const WordsAndColors = (props) => {
  return (
    <div className='mt-3'>
      {isNaN(props.word) ? (
        <h1 style={{ color: props.txtColor, backgroundColor: props.bgColor }}>
              The word is: {props.word}
        </h1>
      ) : (
        <div>
          <h2>Are you seriously messing with me?! You're supposed to enter a word this time!!</h2>
          <img
            src={Anger}
            alt="Anger"
            style={{ width: "200px", height: "200px" }}
            className="img-thumbnail"
          ></img>
        </div>
      )}
    </div>
  );
};
export default WordsAndColors;
