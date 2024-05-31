const FindCountries = ({ searchKey, handleSearchKey }) => {
  return (
    <div>
      find countries <input value={searchKey} onChange={handleSearchKey} />
    </div>
  )
}

export default FindCountries