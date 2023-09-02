import React, { useState } from 'react'
import './tictactoe.css'

const Tictactoe = () => {

    // control all 9 digits 
    const [board , setBoard ]= useState(Array(10).fill(''))
    // to put x and 0 we use move and setmove 
    const [move, setMove] = useState('x')

    const click=(n) => {
        let square = [...board]

        if (board[n] !== ''){
            alert('Already Clicked ')
            return 
        }
        square[n]=move 
        setBoard(square)

        if (move ==='x'){
            setMove('o')
        }
        else {
            setMove('x')
        }

        if (checkwin(square)){
            alert("Winner")
            square.fill('');
            setBoard(square)
        }
        if (checkdraw(square)) {
            alert("Match Draw")
            square.fill('');
            setBoard(square)
        }

        
    }

    const checkdraw = (board) => {
        let count =0 ;
        board.forEach(element => {
            if(element !== ''){
                count++;
            }
        });
        if (count >= 9){
            return true ;
        }
        else {
            return false ;
        }
    }

    const checkwin= (board) => {
        const conditions=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        
        let flag = false ;
        conditions.forEach(element => {
            if(board[element[0]] !== '' && board[element[1]]  !== ''  && board[element[2]] !== ''){
            if(board[element[0]]===board[element[1]]  && board[element[1]]===board[element[2]]){
                flag = true ;
               
            }
        }
        });
        return flag;

    }





  return (
    <>
    <h1 className='text-center'>Tic Tac Toe</h1>
    <table>
      <tbody>
        <tr>

        {/* konsa no ka box click ho raha isse janne ke liye index ko pass kar denge  */}
          <td onClick={() => {click(0)}}>{board[0]}</td>
          <td onClick={() => {click(1)}}>{board[1]}</td>
          <td onClick={() => {click(2)}}>{board[2]}</td>
        </tr>
        <tr>
          <td onClick={() => {click(3)}}>{board[3]}</td>
          <td onClick={() => {click(4)}}>{board[4]}</td>
          <td onClick={() => {click(5)}}>{board[5]}</td>
        </tr>
        <tr>
          <td onClick={() => {click(6)}}>{board[6]}</td>
          <td onClick={() => {click(7)}}>{board[7]}</td>
          <td onClick={() => {click(8)}}>{board[8]}</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default Tictactoe