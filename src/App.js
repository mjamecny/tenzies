import Die from './components/Die'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const App = () => {
  // generate array of 10 numbers between 1-6
  const allNewDice = () => {
    let newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  const generateNewDie = () => {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    }
  }

  // set state
  const [dice, setDice] = useState(allNewDice())

  const holdDice = (id) => {
    setDice(
      dice.map((die) => {
        return die.id === id
          ? { ...die, isHeld: !die.isHeld }
          : die
      })
    )
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
    setDice(
      dice.map((die) => {
        return die.isHeld ? die : generateNewDie()
      })
    )
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to
        freeze it at its current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
