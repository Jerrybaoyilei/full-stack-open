const Course = ({ name, parts }) => {
  return (
    <div>
      <Header name={name}></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  )
}

const Header = ({ name }) => {
  return (
    <h1>
      {name}
    </h1>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
        <p key={part.id}>{part.name} {part.exercises}</p>
      )}
    </div>
  )
}

const Total = ({ parts }) => {

  const initValue = 0;
  const sumOfExercises = parts.reduce(
    (accumulator, currentPart) => accumulator + currentPart.exercises, initValue
  )
  return (
    <p>Total number of exercises: {sumOfExercises}</p>
  )
}

export default Course;