const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} - {props.exercises}
    </p>
  )
}

const Content = (props) => {
  const parts = props.course.parts
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  const parts = props.course.parts
  return (
    <p>
      Number of units{' '}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer
      style={{
        marginTop: '2rem',
        borderTop: '1px solid #ccc',
        paddingTop: '1rem',
        color: '#555',
      }}
    >
      {props.name} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 Industry Elective 1',
    parts: [
      { name: 'IT317 - ', exercises: 3 },
      { name: 'IT365 - ', exercises: 3 },
      { name: 'CSIT321 - ', exercises: 3 },
    ],
  }
  const fullName = 'Jozef Benedict Rabaya'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer name={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App