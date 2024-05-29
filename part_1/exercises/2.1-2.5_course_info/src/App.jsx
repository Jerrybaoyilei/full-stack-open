import Course from "./components/Course"

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 0
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 1
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 2
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 3
      }
    ]
  }

  const Total = ({ course }) => {
    return (
      <p>
        Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
      </p>
    )
  }

  return (
    <Course name={course.name} parts={course.parts}></Course>
  )
}

export default App