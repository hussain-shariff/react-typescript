import React, {useState} from 'react'

type greetProps = {
  name : String,
  age ?: number
}

function Greet(props : greetProps) {
  return (
    <div className='text-center'>
      {<h1>Hello World , This is {props.name} and I'm learning typescript. And I'm {props.age} year old</h1>}
    </div>
  )
}

export default Greet