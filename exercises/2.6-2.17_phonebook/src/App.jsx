import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import AddNew from './components/AddNew'
import Number from './components/Number'
import Noticication from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('John Appleseed')
  const [newNumber, setNewNumber] = useState('123-456-7890')
  const [searchKey, setSearchKey] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response))
  }, [])

  const addNewPerson = (event) => {
    event.preventDefault()
    const oldPerson = persons.find(person => person.name === newName)
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (oldPerson) {
      if (oldPerson.number === newNumber) {
        alert(`The exact same person is already in the phonebook`)
      } else {

        if (confirm(`${newPerson.name} is already added to the phonebook, replace the old number with a new one?`)) {
          personService.updateNumber(oldPerson.id, newPerson).then(response => {
            setPersons(persons.map(person => person.id !== oldPerson.id ? person : response))
            setNewName('John Appleseed')
            setNewNumber('123-456-7890')
            setSuccessMessage(`Number changed to ${newPerson.number} for ${newPerson.name}`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
          })
        }
      }
    } else {
      personService.create(newPerson).then(response => {
        setPersons(persons.concat(response))
        setNewName('John Appleseed')
        setNewNumber('123-456-7890')
        setSuccessMessage(`Added ${newPerson.name}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      })

    }
  }

  const deletePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personService
        .remove(id)
      setPersons(persons.filter(person => person.id !== id))
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
      <Noticication message={successMessage} />
      <Filter searchKey={searchKey} handleSearchKey={handleSearchKey}></Filter>
      <h2>Add A New</h2>
      <AddNew newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addNewPerson={addNewPerson}></AddNew>
      <h2>Numbers</h2>
      <Number persons={persons} searchKey={searchKey} deletePerson={deletePerson}></Number>
    </div>
  )
}

export default App