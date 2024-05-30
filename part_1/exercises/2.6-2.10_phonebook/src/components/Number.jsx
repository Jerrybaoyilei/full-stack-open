const Number = ({ persons, searchKey }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <div>
        {
          searchKey ?
            persons.filter(person => person.name.includes(searchKey))
              .map(person => <p key={person.name}>{person.name} {person.number}</p>)
            : persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
        }
      </div>
    </div>
  )
}

export default Number