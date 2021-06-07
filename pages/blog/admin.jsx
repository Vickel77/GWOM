import styled from "styled-components";
import {useState, useEffect, useContext} from "react";
import base from "../api/base"
import BackOffice from "../../components/BackOffice";

const admin = styled(({className})=>{
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)
  const [hasAccount, setHasAccount] = useState(false)

  const handleLogin =async (e)=>{
    e.preventDefault();
    try { 
      await base
      .auth()
        .signInWithEmailAndPassword(email, password)
      base.auth().onAuthStateChanged(setHasAccount)
      setErrorMessage(false)
      } catch (error){
        console.log(error);
        setErrorMessage(true)
      }

    e.target.reset();
  }

  return(
    <div className={className}>
      {!hasAccount ?
        <div className="login">
          <form action="" className="form" onSubmit={handleLogin}>
            <h2>ADMIN LOGIN</h2>
            {
              errorMessage && <p className="errorMessage">The details you entered were incorrect, please try again</p>
            }
            <input type="email" name="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} required /> <br/>
            <input type="password" name="password" id="" placeholder="password" onChange={(e)=>setPassword(e.target.value)} required /> <br/>
            <input type="submit" />
          </form> 
        </div> : 
       <>
        <BackOffice />
       </>
       }
    </div>
  )
})`
  .login {
    background:${({theme})=>theme.colors.primary};
    color:white;
    text-align:center;
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    .form {
      width:30%;
      input {
        border:none;
        outline:none;
        padding:10px;
        border-radius:5px;
      }
      input[type="submit"] {
        color:${({theme})=>theme.colors.primary};
        box-shadow:0 2px 10px rgba(0,0,0,.25);
        transition:.2s;
      }
      input[type="submit"]:hover {
        box-shadow:0 2px 10px rgba(0,0,0,.15);
      }
      input[type="submit"]:active {
        background:${({theme})=>theme.colors.primary};
        color:${({theme})=>theme.colors.white};
        box-shadow:none;
      }
      input::placeholder {color:#ccc;}
      .errorMessage {
        color:#ffcc00;
        font-size:.8em;
      }
    }
    .form * {
      width:100%;
      margin:0 auto;
      margin-bottom:10px;
    }
  }
  
  @media (max-width:600px){
    .login{
      .form {
        width:70vw;
        // display:flex;
        // flex-flow:column nowrap;
        // align-items:center;
        // justify-content: center;
        h2{
          margin-bottom:20px;
        }
      }
    }
  }

`

export default admin;
