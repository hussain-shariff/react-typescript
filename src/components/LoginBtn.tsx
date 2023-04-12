import React from 'react'

type LoginBtnProps = {
    handleClick : () => void,
    isLogin : boolean
}

function LoginBtn(props : LoginBtnProps) {
  return (
    <button onClick={()=> props.handleClick()} className='border-black mb-5 border px-2 hover:text-white hover:bg-black'>
        { props.isLogin ? "logout" : 'Login'}
    </button>
  )
}

export default LoginBtn