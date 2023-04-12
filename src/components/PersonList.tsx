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
        {props.names.map(name=>(
            <li>{name.first} {name.last}</li>
        ))}
    </div>
  )
}

export default PersonList