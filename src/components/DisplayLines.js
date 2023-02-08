import React from "react";

const DisplayLines = ({ lineData, showAllLines, toggleShowAllLines }) => {
  let linesOfText = <p>{lineData[lineData.length - 1]}</p>;
  if (showAllLines) {
    linesOfText = lineData.map((line) => {
      return <p>{line}</p>;
    });
  }

  const headerText = showAllLines ? "Final Poem:" : "Last Line:";
  const buttonText = showAllLines ? "Show Only Last Line" : "Show All Lines";

  return (
    <section>
      <h2>{headerText}</h2>
      {linesOfText}
      <button onClick={toggleShowAllLines}>{buttonText}</button>
    </section>
  );
};

export default DisplayLines;
