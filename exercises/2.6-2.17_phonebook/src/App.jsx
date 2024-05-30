import { useState } from 'react'
import Filter from './components/Filter'
import AddNew from './components/AddNew'
import Number from './components/Number'

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchKey={searchKey} handleSearchKey={handleSearchKey}></Filter>
      <h2>Add A New</h2>
      <AddNew newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addNewPerson={addNewPerson}></AddNew>
      <h2>Numbers</h2>
      <Number persons={persons} searchKey={searchKey}></Number>
    </div>
  )
}

export default App