import Greet from "./components/Greet"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import Status from "./components/Status"
import Heading from "./components/Heading"
import Oscar from "./components/Oscar"

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
      <h1 className=" font-extrabold">Object prop</h1>
      <Person
        name={personName}/>
      <h1 className=" font-extrabold">List of objects</h1>
      <PersonList
        names={personNameList}/>
      <h1 className=" font-extrabold">Literal props</h1>
      <Status
        message="loading"/>
      <h1 className=" font-extrabold">Children props</h1>
      <Heading>Placeholder text</Heading>
      <h1 className=" font-extrabold">React Node prop</h1>
      <Oscar>
        <Heading>Oscar goes to Leonardo di caprio</Heading>
      </Oscar>
    </div>
  )
}

export default App
