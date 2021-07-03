import React, { useState } from "react";
import Square from "../Square/Square";
import './Board.css';

const Board = () => {
    const initialSquares=new Array(9).fill(null);
    const [squares,setSquares] = useState(initialSquares);
    const[isXNext,setIsXNext] = useState(true);

    const handleClickEvent = (i)=>{

        const updatesquare = [...squares];
        if(updatesquare[i] ==null && winner == null){
        updatesquare[i] = isXNext?'X':'O';
        setSquares(updatesquare);
        setIsXNext(!isXNext);
        }
        else {
            return;
        }
        
    }
    const rendersquare = (i) => {
        return <Square value={squares[i]}
        onClickEvent = {() => handleClickEvent(i)}
        />
    }
    const calculateWinner =(squares) => {
        const lines = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ]
    
        for(let line of lines)
        {
            const [a,b,c]=line;
            if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c])
            {
                return squares[a];
            }
            
        }
        return null;
    }
    const winner = calculateWinner(squares);
    const status = winner ? `Winner is ${winner}`: `Next Player ${isXNext ? 'X' : 'O'}`;
    return (
        <div className="Board">
            <div className='status'>{status}</div>
            <div className='board-row' >
                {rendersquare(0)}
                {rendersquare(1)}
                {rendersquare(2)}
            </div>
            <div className='board-row' >
                {rendersquare(3)}
                {rendersquare(4)}
                {rendersquare(5)}
            </div>
            <div className='board-row' >
                {rendersquare(6)}
                {rendersquare(7)}
                {rendersquare(8)}
            </div>

        </div>

    )

    
}

export default Board;