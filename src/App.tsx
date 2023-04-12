import Greet from "./components/Greet"
import Person from "./components/Person"
import PersonList from "./components/PersonList"

function App() {

  const personName = {
    first : 'Bruce',
    last : 'Wayne'
  }

  const personNameList = [
    {
      first : 'Bruce',
      last : 'Wayne'
    },
    {
      first : 'Clark',
      last : 'Klent'
    },
    {
      first : 'Princess',
      last : 'Diana'
    },
  ]

  return (
    <div className="App text-center">
      <Greet
        name = "Hussain"
        age={22}/>
      <Person
        name={personName}/>
      <PersonList
        names={personNameList}/>
    </div>
  )
}

export default App
