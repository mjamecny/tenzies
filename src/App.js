import Die from './components/Die'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const App = () => {
  // generate array of 10 numbers between 1-6
  const allNewDice = () => {
    let newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      })
    }
    return newDice
  }

  // set state
  const [dice, setDice] = useState(allNewDice())

  const holdDice = (id) => {
    console.log(id)
  }

  // generate dice elements
  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ))

  const rollDice = () => {
    setDice(allNewDice())
  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
