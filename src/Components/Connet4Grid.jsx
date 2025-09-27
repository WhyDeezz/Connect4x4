import { useEffect, useState } from "react"

export default function Grid()

{
    let [noofplayer , setnoofplayer] = useState(0) 
    useEffect(() => {
  const userInput = parseInt(prompt("Enter no of players") || "4", 10);
  setnoofplayer(userInput);
}, []);

    
    
    


    const [grid , setgrid]  = useState([
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],

    ])
    

    const [player , setplayer] = useState(1);

function checkifwin(matrix, player) {
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1],
    [-1, -1], [-1, 1], [1, -1], [1, 1],
  ];

  for (let r = 0; r < 12; r++) {
    for (let c = 0; c < 12; c++) {
      if (matrix[r][c] === player) {
        for (let [dr, dc] of directions) {
          let count = 1;
          let row = r + dr;
          let col = c + dc;

          while (
            row >= 0 && row < 12 &&
            col >= 0 && col < 12 &&
            matrix[row][col] === player
          ) {
            count++;
            if (count === 4) {
              alert("Player " + player + " Won!!");
              return true;
            }
            row += dr;
            col += dc;
          }
        }
      }
    }
  }
  return false;
}
  

function putcoins(col) {
  const newGrid = grid.map(row => [...row]);

  for (let row = 11; row >= 0; row--) {
    if (newGrid[row][col] === 0) {
      const currentPlayer = (player % noofplayer) || noofplayer;
      newGrid[row][col] = currentPlayer;

     
      setgrid(newGrid);
      setplayer(prev => prev + 1);

      
      if (checkifwin(newGrid, currentPlayer)) {
        console.log('Player'+ player + 'Won!!!');
      }
      break;
    }
  }
}
    
return (      
  <div className="grid-container-container">
    <div className="grid-container" id = 'grid-container'>


      {
      grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          let color = "#BBBBBB"; 
          if (cell === 1) color = "red";
          else if (cell === 2) color = "#FFCE1B";
          else if (cell === 3) color = "blue";
          else if (cell === 4) color = "green";
        
          

          return (
            
            <button

              key={`${rowIndex}-${colIndex}`}
              onClick={() => putcoins(colIndex)}
              className="grids"
              style={{
                width: "50px",
                height: "50px",
                border:"solid black 0px",
                borderRadius:'50%',
                background: color,}}
          
              

            
                
                
              
            />
          );
        })
      )}
    </div>
    <div className="ejeee"> 
      <h1>Connect 4x4</h1>
      <h2>Current Player is </h2>
      <p>Player {(player % noofplayer) || noofplayer}</p> 
    </div>
    
  </div>
);

}

