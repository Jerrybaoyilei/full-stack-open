const Filter = ({ searchKey, handleSearchKey }) => {
  return (
    <div>
      filter shown with <input value={searchKey} onChange={handleSearchKey}></input>
    </div>
  )
}

export default Filter