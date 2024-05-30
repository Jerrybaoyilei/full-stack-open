import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '932-294-8690' }
  ])
  const [newName, setNewName] = useState('John Appleseed')
  const [newNumber, setNewNumber] = useState('123-456-7890')

  const addNewPerson = (event) => {
    event.preventDefault()
    if (persons.findIndex(person => person.name === newName) !== -1) {
      alert(`Person with name ${newName} is already added to phonebook`)

    }
    else if (persons.findIndex(person => person.number === newNumber) !== -1) {
      alert(`Person with number ${newNumber} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}></input>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}></input>
        </div>
        <div>
          <button type="submit" onClick={addNewPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>
        )}
      </div>
    </div>
  )
}

export default App