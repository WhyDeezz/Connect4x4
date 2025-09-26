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

    
    function checkifwin(matrix , player)
    {
        const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1],
    [-1, -1], [-1, 1], [1, -1], [1, 1] 
  ];
      for (let r = 0 ; r < 12 ; r++)
        {
          for(let k = 0 ; k < 12 ; k++)
            {
              if (matrix[r][k] == player)
              {
                for (let [dr , dk] of directions)
                  {
                    let count = 1;
                    let row = r + dr;
                    let col = k + dk;
          while (
            row >= 0 && row < 12 &&
            col >= 0 && col < 12 &&
            matrix[row][col] === player
          ) {
            count++;
            if ((count === 4)&& player != 0 ){
              alert("player " + player+' Won!!')
              return true; 
              
            }
            row += dr;
            col += dk;
              }
                  }

            }
        }

    }
  }
  

    function putcoins(col)
    {
        checkifwin(grid, (((player % noofplayer) || noofplayer)-1))
 
        
        const newGrid = grid.map(row => [...row]);
        for (let row = 11 ; row >= 0 ; row--)
            {
                if (newGrid[row][col] == 0)
                    {
                        newGrid[row][col] = ((player % noofplayer )|| noofplayer);
                        setplayer(prev => prev + 1)
                        setgrid(newGrid)
                        console.log(((player % noofplayer )|| noofplayer)) 
                        checkifwin(grid, (((player % noofplayer) || noofplayer)))
                        break

                    }
                
            }

    }
    
return (      
  <div className="grid-container-container">
    <div className="grid-container">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          let color = "#BBBBBB"; 
          if (cell === 1) color = "red";
          else if (cell === 2) color = "yellow";
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
                background: color,
                
                
              }}
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

