// import { useEffect, useRef } from "react";
// import styled from "styled-components";
// import Head from "next/head";


// const PayPal = styled(({className})=>{
//   const paypal = useRef();
//   useEffect(()=>{
//     window.paypal.Buttons({
//       createOrder : (data, actions) => {
//         return actions.order.create({
//           intent: "CAPTURE",
//           purchase_units: [
//             {
//               description: "GWOM Donation",
//               amount: {
//                 currency_code: "USD",
//                 value: "0.01",
//               },
//             },
//           ],
//         });
//       },
//       onApprove : async (data, actions) => {
//         return await actions.order.capture();
//       },
//       onError: (error) => {
//         console.log(error);
//       }
//     }).render(paypal.current)
//   },[])
//   return(
//     <div className={className}>
//       <Head>
//         <script src="https://www.paypal.com/sdk/js?client-id=AS82ItxUxCeTdYvdNhJjLxgoWRMxlDLNQ84pmjQ_s17t_c8660I_vjH0KUeOm7ULGfVOvk9VVc2zGZr5&currency=USD" />
//       </Head>
//       <div ref={paypal}></div>
//     </div>
//   )
// })`

// `

// export default PayPal;

