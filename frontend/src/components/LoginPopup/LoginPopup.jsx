import React, {  useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {
const {URL,setToken } = useContext(StoreContext)

    const [currentState,setCurrentState] = useState("Sign Up")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:"",
    })

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    const onLogin = async(event)=>{
        event.preventDefault()
        let newUrl = URL;

        if(currentState === "Login"){
            newUrl += "/api/user/login"
        }
        else{
            newUrl +="/api/user/register"
        }

        const response = await  axios.post(newUrl,data);

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token)
            setShowLogin(false)
        }
        else{
            alert(response.data.message);
        }
    }

  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2> {currentState}</h2>
                <img onClick={()=>{ setShowLogin(false)}} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currentState==="Login"?<></>:<input name='name' onChange={onChangeHandler} 
                value={data.name} type="text" placeholder='Your name' required />}
                
                <input name='email' onChange={onChangeHandler} value={data.email} type="email"  placeholder='Your Email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required/>
                
            </div>
                <button type='submit'>{currentState === "Sign Up"?"create account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By Clicking this i agree to terms & conditions </p>
                </div>
                {currentState==="Login"?<p>Create a new Account? <span onClick={()=>setCurrentState("Sign Up")}>click here</span></p>:
                <p>Already  have an account? <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>}
                
                
                
            </form>

    </div>
  )
}

export default LoginPopup