import React from "react";

const DisplayLines = ({ lineData, showAllLines, toggleShowAllLines }) => {
  let linesOfText = <p>{lineData[lineData.length - 1]}</p>;
  let headerText = "Last Line";
  let buttonText = "Show Final Poem";

  if (showAllLines) {
    linesOfText = lineData.map((line, index) => {
      return <p key={index}>{line}</p>;
    });
    headerText = "Final Poem";
    buttonText = "Show Only Last Line";
  }

  return (
    <section>
      <h2>{headerText}</h2>
      {linesOfText}
      <button onClick={toggleShowAllLines}>{buttonText}</button>
    </section>
  );
};

export default DisplayLines;
