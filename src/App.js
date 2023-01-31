import Die from './components/Die'
import { useState } from 'react'

const App = () => {
  // generate array of 10 numbers between 1-6
  const allNewDice = () => {
    let newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1)
    }
    return newDice
  }

  const [dice, setDice] = useState(allNewDice())

  const diceElements = dice.map((die, i) => (
    <Die key={i} value={die} />
  ))

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
    </main>
  )
}

export default App
