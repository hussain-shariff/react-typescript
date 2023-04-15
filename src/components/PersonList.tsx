import React from 'react'

type PersonListProps = {
    names : {
        first : string,
        last : string
    }[]
}

function PersonList(props : PersonListProps) {
    
  return (
    <div>
        {props.names.map((name, idx)=>(
            <h1 key={idx}>{name.first} {name.last}</h1>
        ))}
    </div>
  )
}

export default PersonList