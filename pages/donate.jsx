import React from "react";
import ReactDOM from "react-dom"
import styled from "styled-components";
import {Layout} from "../components/Layout"
import Head from 'next/head';
import AltHeader from "../components/AltHeader/AltHeader";

// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

const Donate = styled(({className})=>{
  // const onApprove = (data, actions) => {
  //   return actions.order.capture();
  // }

  return(
    <Layout>
      <div className={className}>
      <AltHeader title="DONATE" subTitle="This Page is still under development..." />
      </div>
    </Layout>
    // MAIN PAGE
    // <>
    // <Head>
    //   <script src="https://www.paypal.com/sdk/js?client-id=AS82ItxUxCeTdYvdNhJjLxgoWRMxlDLNQ84pmjQ_s17t_c8660I_vjH0KUeOm7ULGfVOvk9VVc2zGZr5"></script>
    // </Head>
    //   <Layout>
    //     <div className={className}>
    //       <AltHeader title="DONATE" subTitle="Support GWOM by making a donation" />
    //       <PayPalButton
    //         createOrder={(data, actions) => createOrder(data, actions)}
    //         onApprove={(data, actions) => onApprove(data, actions)}
    //       />
    //     </div>
    //   </Layout>
    // </>
  )
})`
  margin-bottom:100px;
  color:${({theme})=>theme.colors.primary};
  h1 {
    text-align:center;
  }
`

export default Donate;