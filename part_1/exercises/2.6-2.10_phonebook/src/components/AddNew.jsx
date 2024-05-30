const AddNew = ({ newName, handleNameChange, newNumber, handleNumberChange, addNewPerson }) => {
  return (
    <div>
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
    </div>
  )
}

export default AddNew