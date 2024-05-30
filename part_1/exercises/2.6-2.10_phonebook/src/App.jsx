import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('John Appleseed')
  const [newNumber, setNewNumber] = useState('123-456-7890')
  const [searchKey, setSearchKey] = useState('')

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

  const handleSearchKey = (event) => {
    setSearchKey(event.target.value)

  }

  const filterPersons = () => {
    if (searchKey) {
      return (
        persons.filter(person => person.name === searchKey)
          .map(person => <p>{person.name} {person.number}</p>)
      )
    } else {
      return (
        persons.map(person => <p>{person.name} {person.number}</p>)
      )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={searchKey} onChange={handleSearchKey}></input></div>
      <h2>Add A New</h2>
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
        {
          searchKey ?
            persons.filter(person => person.name.includes(searchKey))
              .map(person => <p>{person.name} {person.number}</p>)
            : persons.map(person => <p>{person.name} {person.number}</p>)
        }
      </div>
    </div>
  )
}

export default App