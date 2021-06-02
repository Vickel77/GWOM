import styled from "styled-components";
import AltHeader from "../components/AltHeader/AltHeader";
import {Layout} from "../components/Layout"
import emailjs from "emailjs-com";
import useSnackbar from "../hooks/useSnackBar";

const Partner = styled(({className})=>{
  const { showSuccess, showError } = useSnackbar();
  
  const handleMail = (e) =>{
    e.preventDefault();
    emailjs.sendForm("service_77tupvc", "template_lqh64le", e.target, "user_7CH6RLoLJaqirqM7Yf60C")
      .then(result=>{
        showSuccess("Thank you for Partnering! \n we'll get across to you shortly")
        })
      .catch(error=>showError(error))
    e.target.reset();
  }
  return(
    <Layout>
      <div className={className}>
        <AltHeader title="BECOME A PARTNER" />
        <div className="partner-wrap">
          <div className="partner-text">
          Start impacting lives massively by becoming a partner today at GWOM 
          please fill the form below, so we can reach out you and introduce you to the rest of the family.    
          </div>
          <div className="partner-form">
            <form action="#" method="GET" onSubmit={handleMail}>
              <label htmlFor="name">NAME</label>
              <input type="text" name="name" placeholder="Name" required/>
              <label htmlFor="email">EMAIL</label>
              <input type="text" name="email" placeholder="email" required/>
              <label htmlFor="phone">PHONE</label>
              <input type="number" htmlFor="phone" name="phone" placeholder="Phone number" required/>
              <label htmlFor="name">REASON FOR BECOMING A PARTNER?</label>
              <textarea name="reason" id="" cols="30" rows="10"></textarea>
              <input type="submit" value="SUBMIT" />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
})`
color:${({theme})=>theme.colors.primary};
.partner-wrap {
  margin:100px auto;
  width:60%;
}
h1 {
  text-align:center;
}
.partner-text {
  line-height:1.5;
}
.partner-form {
  background:${({theme})=>theme.colors.primary};
  color:${({theme})=>theme.colors.white};
  margin-top:50px;
  padding:50px 20px;
  box-shadow:0 2px 15px rgba(0,0,0,.3);
  input,textarea {
    background:${({theme})=>theme.colors.white};
    width:100%;
    padding:10px;
    margin:10px 0 15px;
    border:none;
    outline:none;
    border-radius:5px;
    color:${({theme})=>theme.colors.primary};
    resize:none;
  }
  input[type="submit"] {font-weight: bold;}
  input[type="submit"]:hover {
    transition:.3s;
    background:${({theme})=>theme.colors.primary};
    color:${({theme})=>theme.colors.white};
    box-shadow: 0 2px 5px rgba(0,0,0,.5);
  }
  input::placeholder {
    color:${({theme})=>theme.colors.primary};
    opacity:.5;}
  input[type="submit"]:active {
    box-shadow: 0 0px 2px rgba(0,0,0,.5);
  }
}

@media (max-width:600px){
  .partner-wrap {
    margin:100px auto;
    width:90%;
    .partner-text {
      margin:0 auto;
      width:80%;
    }
  }
}
`

export default Partner;