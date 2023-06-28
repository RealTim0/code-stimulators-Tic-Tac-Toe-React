import React from "react";

export default function Table(props) {
    const [shuffle, setShuffle] = React.useState(Array(9).fill(""));
    const [currentLetter, setCurrentLetter] =React.useState("X");
    function handleClick(index) {
        if (shuffle[index] !== "") {
            return;
          }
      
    const newShuffle = [...shuffle];
    newShuffle[index] = currentLetter;
    setShuffle(newShuffle);

    setCurrentLetter(currentLetter === "X" ? "O" : "X");
    }

  return (
    <main>
    <div className="play">
        <h3>Player</h3>
        <div className="disp">
         <td className="display">{currentLetter}</td>
         </div>
    </div>
      <table className="Table">
  <tr className="row">
    <td className="data" onClick={() => handleClick(0)}>
      {shuffle[0]}
    </td>
    <td className="data" onClick={() => handleClick(1)}>
      {shuffle[1]}
    </td>
    <td className="data" onClick={() => handleClick(2)}>
      {shuffle[2]}
    </td>
  </tr>
  <tr className="row">
    <td className="data" onClick={() => handleClick(3)}>
      {shuffle[3]}
    </td>
    <td className="data" onClick={() => handleClick(4)}>
      {shuffle[4]}
    </td>
    <td className="data" onClick={() => handleClick(5)}>
      {shuffle[5]}
    </td>
  </tr>
  <tr className="row">
    <td className="data" onClick={() => handleClick(6)}>
      {shuffle[6]}
    </td>
    <td className="data" onClick={() => handleClick(7)}>
      {shuffle[7]}
    </td>
    <td className="data" onClick={() => handleClick(8)}>
      {shuffle[8]}
    </td>
  </tr>
</table>
</main>
  )
}

