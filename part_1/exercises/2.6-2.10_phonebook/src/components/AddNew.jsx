const AddNew = ({ newName, handleNameChange, newNumber, handleNumberChange, addNewPerson }) => {
  return (
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
  )
}

export default AddNew