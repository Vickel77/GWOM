import styled from "styled-components";
import AltHeader from "../components/AltHeader/AltHeader";
import {Layout} from "../components/Layout"

const Partner = styled(({className})=>{
  return(
    <Layout>
      <div className={className}>
        <AltHeader title="BECOME A PARTNER" />
        <div className="partner-wrap">
          <div className="partner-text">
          Start impacting lives massively by becoming a parnter today at GWOM 
          please fill the form below, so we can reach out you and introduce you to the rest of the family.    
          </div>
          <div className="partner-form">
            <form action="#" method="GET">
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
  }
  input[type="submit"] {font-weight: bold;}
  input[type="submit"]:hover {
    transition:.3s;
    background:${({theme})=>theme.colors.primary};
    color:${({theme})=>theme.colors.white};
    box-shadow: 0 2px 5px rgba(0,0,0,.5);
  }
  input::placeholder {color:${({theme})=>theme.colors.primary};}
  input[type="submit"]:active {
    box-shadow: 0 0px 2px rgba(0,0,0,.5);
  }

}
`

export default Partner;