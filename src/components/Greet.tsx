import React from 'react'

type greetProps = {
  name : String
}

function Greet(props : greetProps) {
  return (
    <div className='text-center'>
      <h1>Hello World , This is {props.name} and I'm learning typescript</h1>
    </div>
  )
}

export default Greet