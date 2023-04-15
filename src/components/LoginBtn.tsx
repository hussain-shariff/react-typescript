import React from 'react'

type LoginBtnProps = {
    handleClick : (event : React.MouseEvent<HTMLButtonElement>, id : number) => void,
    isLogin : boolean
}

function LoginBtn(props : LoginBtnProps) {
  return (
    <button onClick={event => props.handleClick(event, 1)} className='border-black mb-5 border px-2 hover:text-white hover:bg-black'>
        { props.isLogin ? "logout" : 'Login'}
    </button>
  )
}

export default LoginBtn