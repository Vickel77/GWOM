import styled from "styled-components";
import {useState, useEffect} from "react";
import BackOffice from "../../components/BackOfffice";

const admin = styled(({className})=>{
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [hasAccount, setHasAccount] = useState(false)

  const clearInputs =()=>{
    setEmail('');
    setPassword('');
  }

  return(
    <div className={className}>
      {hasAccount ?
        <form action="">
          <input type="email" name="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/> <br/>
          <input type="password" name="password" id="" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/> <br/>
          <input type="submit" />
       </form> : <>
        <BackOffice />
       </>}
    </div>
  )
})`

`

export default admin;
