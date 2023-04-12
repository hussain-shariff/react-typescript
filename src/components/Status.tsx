import React from 'react'

type StatusProps = {
    message : "loading" | "success" | "error"
}

function Status(props : StatusProps) {
  return (
    <div>
        {props.message === "loading" && <h1>Loading...</h1>}
        {props.message === "success" && <h1>Data fetched successfully</h1>}
        {props.message === "error" && <h1>Error fetching data</h1>}
    </div>
  )
}

export default Status