const Number = ({ persons, searchKey, deletePerson }) => {
  return (
    <div>
      {
        searchKey ?
          persons.filter(person => person.name.includes(searchKey))
            .map(person => {
              return (
                <div>
                  {person.name} {person.number}
                  <button key={person.name} onClick={() => deletePerson(person.id)}>delete</button>
                </div>
              )
            })
          : persons.map(person => {
            return (
              <div key={person.name}>
                {person.name} {person.number}
                <button onClick={() => deletePerson(person.id)}>delete</button>
              </div>
            )
          }
          )
      }
    </div>
  )
}

export default Number