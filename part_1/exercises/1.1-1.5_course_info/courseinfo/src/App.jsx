// 1.1 - 1.2
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course} />
//       <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
//       <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
//     </div>
//   )
// }

// const Header = (props) => {
//   let course = props.course;

//   return (
//     <h1>{course}</h1>
//   )
// }

// const Content = (props) => {
//   let part1 = props.part1;
//   let part2 = props.part2;
//   let part3 = props.part3;
//   let exercises1 = props.exercises1;
//   let exercises2 = props.exercises2;
//   let exercises3 = props.exercises3;

//   return (
//     <div>
//       <Part part={part1} exercises={exercises1} />
//       <Part part={part2} exercises={exercises2} />
//       <Part part={part3} exercises={exercises3} />
//     </div>
//   )
// }

// const Part = (props) => {
//   let part = props.part;
//   let exercises = props.exercises;

//   return (
//     <p>
//       {part} {exercises}
//     </p>
//   )
// }

// const Total = (props) => {
//   let exercises1 = props.exercises1
//   let exercises2 = props.exercises2
//   let exercises3 = props.exercises3

//   return (
//     <p>
//       Number of exercises {exercises1 + exercises2 + exercises3}
//     </p>
//   )
// }

// export default App


// 1.3 - 1.5
const App = () => {
  const course = "Half Stack application development"

  //1.3

  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

  // 1.4

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  // 1.3

  // return (
  //   <div>
  //     <h1>{course}</h1>
  //     <p>
  //       {part1.name} {part1.exercises}
  //     </p>
  //     <p>
  //       {part2.name} {part2.exercises}
  //     </p>
  //     <p>
  //       {part3.name} {part3.exercises}
  //     </p>
  //     <p>
  //       Number of exercises {part1.exercises + part2.exercises + part3.exercises}
  //     </p>
  //   </div>
  // )

  // 1.4

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {parts[0].name} {parts[0].exercises}
      </p>
      <p>
        {parts[1].name} {parts[1].exercises}
      </p>
      <p>
        {parts[2].name} {parts[2].exercises}
      </p>
      <p>
        Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </div>
  )
}

export default App