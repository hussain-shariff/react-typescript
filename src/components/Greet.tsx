import React, {useState} from 'react'

type greetProps = {
  name : String,
  age ?: number
}

function Greet(props : greetProps) {
  const [login, setLogin] = useState(false)


  return (
    <div className='text-center mt-20'>
      <button onClick={()=> setLogin(!login)} className='border-black mb-5 border px-2 hover:text-white hover:bg-black'>
        {login ? 'Logout' : 'Login'}
      </button>
      {login && <h1>Hello World , This is {props.name} and I'm learning typescript. And I'm {props.age} year old</h1>}
    </div>
  )
}

export default Greet