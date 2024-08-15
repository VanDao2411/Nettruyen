// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Login.css'
import { login, signup, } from '../../firebase'

function Login() {
  const [signState, setSignState] = useState("Đăng Nhập")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true)
    if (signState === "Đăng Nhập") {
      await login(email, password,);
    } else {
      await signup(name, email, password);
    }
    setLoading(false)
  }

  return (
    loading ? <div className="login-spinner">
      <img src='' alt="" />
    </div> :
      <div className="login">
        {/* <img src={logo} alt="" className='login-logo'/> */}
        <div className="login-form">
          <h1> {signState} </h1>
          <form action="">
            {signState === "Đăng Ký" ?
              <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Your name' /> : <></>}
            <h3 className='text-[18px]  text-slate-400'>Email</h3>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Email' />
            <h3 className='text-[18px]  text-slate-400'>Mật Khẩu</h3>
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password' />
            <div className="form-help">
              <p>Quên Mật Khẩu</p>
              <div className="form-switch">
                {signState === "Đăng Nhập" ? <p> <span onClick={() => { setSignState("Đăng Ký") }}>Đăng Ký</span></p>
                  : <p> <span onClick={() => { setSignState("Đăng Nhập") }} >Sign In Now</span></p>}
              </div>
            </div>
            <button className='button-dangnhap' onClick={user_auth} type='submit'>{signState}</button>
            <button className="w-full border-0 outline-none py-4 bg-red-600 text-white rounded-md text-[16px] font-medium mt-5 cursor-pointer">Đăng nhập bằng Google</button>
          </form>
        </div>
      </div>
  )
}

export default Login