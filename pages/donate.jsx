import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Layout} from "../components/Layout"
import AltHeader from "../components/AltHeader/AltHeader";
import { PayPalButton } from "react-paypal-button-v2";
import useSnackbar from "../hooks/useSnackBar";

const Donate = styled(({className})=>{
  const {showSuccess} = useSnackbar
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const addPaypalScript =(details, data) =>{
    console.log(details);
    if(window.paypal){
      setScriptLoaded(true)
      return;
    }
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=AYq18QpUidxeJ1Je8FKDM91rYloZ8RbMFan2Hu4hQApjLDBotnWah0iOAVuLhdtAOCzqTeeAltjNqM3i"
    script.type = "text/javascript";
    script.onload = () => setScriptLoaded(true);
    script.async = true;
    document.body.appendChild(script);
  }
  useEffect(()=>{
    addPaypalScript();
  },[])

  const onSuccess = (details, data)=>{
    console.log(details)
    showSuccess("Donation Successful!");
  }
  const onError = ()=> console.log(details);
  return(
    <Layout>
      <div className={className}>
        <AltHeader title="DONATE" />
        <div className="paypal">
          <h3>Support a female child today, by making a kind donation to the Organization</h3>
          { scriptLoaded ? <PayPalButton 
            amount={10000}
            onSuccess={onSuccess}
            onError={onError}
          /> : <p>Loading...</p> }
        </div>
      </div>
    </Layout>
  )
})`
  margin-bottom:100px;
  color:${({theme})=>theme.colors.primary};
  text-align:center;
  .paypal {
    width:60%;
    margin:0 auto;
    padding-top:100px;
    h3 {
      font-weight: normal;
      padding-bottom:30px;
    }
  }
  h1 {
    text-align:center;
  }
  @media (max-width:600px){
    .paypal {
      width:80%;
      }
  }
`

export default Donate;