import Greet from "./components/Greet"
import Person from "./components/Person"

function App() {

  const personName = {
    first : 'Bruce',
    last : 'Wayne'
  }

  return (
    <div className="App text-center">
      <Greet
        name = "Hussain"
        age={22}/>
      <Person
        name={personName}/>
    </div>
  )
}

export default App
