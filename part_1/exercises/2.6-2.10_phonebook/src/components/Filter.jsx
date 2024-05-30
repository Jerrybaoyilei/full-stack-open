const Filter = ({ searchKey, handleSearchKey }) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={searchKey} onChange={handleSearchKey}></input>
      </div>
    </div>
  )
}

export default Filter