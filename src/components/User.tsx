import React, {useState, useEffect} from 'react'

type UserProps = {
    data : {
        name : string,
        email : string,
    }
    isLogin : boolean,

}

const User = ({ data, isLogin} : UserProps) => {
    const [user, setUser] = useState<null | UserProps["data"]>(null)

    useEffect(()=>{
        if(isLogin){
            setUser({
                name : data.name,
                email : data.email
            })
        }else{
            setUser(null)
        }
    }, [isLogin])

  return (
    <div>
        <h1>User name is - {user?.name}</h1>
        <h1>User email is - {user?.email}</h1>
    </div>
  )
}

export default User