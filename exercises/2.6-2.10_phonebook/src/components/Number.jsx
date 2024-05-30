const Number = ({ persons, searchKey }) => {
  return (
    <div>
      {
        searchKey ?
          persons.filter(person => person.name.includes(searchKey))
            .map(person => <p key={person.name}>{person.name} {person.number}</p>)
          : persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
      }
    </div>
  )
}

export default Number