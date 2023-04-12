import React from 'react'

type ProfileProps = {
    name : string,
    age : number,
    gender ?: 'male' | 'female'
}

function Profile(props : ProfileProps) {
  return (
    <div>
        <h1>Name - {props.name}</h1>
        <h1>Age - {props.age}</h1>
        {props.gender && <h1>Gender - {props.gender}</h1>}
    </div>
  )
}

export default Profile