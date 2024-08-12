import { useEffect, useState } from 'react'
import './App.css'

function App() {


  const initialGame = ["","","","","","","","",""]
  const [game, setGame] = useState(initialGame)
  const [turn,setTurn] = useState("X");

  function verifyVictory(){
    if(game[0] == game[1] && game[0] == game[2] && game[0]!= ""){
      alert(game[0] + " venceu!")
      setGame(initialGame)
    }
    if(game[3] == game[4] && game[3] == game[5] && game[3]!= ""){
      alert(game[3] + " venceu!")
      setGame(initialGame)
    }
    if(game[6] == game[7] && game[6] == game[8] && game[6]!= ""){
      alert(game[6] + " venceu!")
      setGame(initialGame)
    }
    if(game[0] == game[3] && game[0] == game[6] && game[0]!= ""){
      alert(game[0] + " venceu!")
      setGame(initialGame)
    }
    if(game[1] == game[4] && game[1] == game[7] && game[1]!= ""){
      alert(game[1] + " venceu!")
      setGame(initialGame)
    }
    if(!game.some((item) => item == '')){
      alert('deu velha!')
      setGame(initialGame)
    }

  }

  function switchPlayer(){
    if(turn == "X"){
      setTurn("O");
    } else{
      setTurn("X");
    }
  }

  function play(index: number){
    if(game[index] == ""){
      setGame(prev => {
        const newGame = [...prev]
        newGame[index] = turn
        return newGame
      })
      switchPlayer();
    }

  }

  useEffect(() => {
    verifyVictory()
  }, [game])

  return (
    <>
      <div className='gridContainer'>
        {
          game.map((cell, index) => (
            <div className='cell' onClick={() => play(index)}>{cell}</div>
          ))
        } 
      </div>
       
    </>
  )
}

export default App