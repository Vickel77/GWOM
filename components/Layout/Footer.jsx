import styled from "styled-components";
import Link from "next/link";

const Footer = styled(({className})=>{
  return(
    <div className={className}>
      <div className="footer-container">
        <div className="footer-nav">
          <h2>USEFUL LINKS</h2>
          <div className="nav-item">
            <Link href="/">
              HOME
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/about">
              ABOUT
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/blog">
              BLOG
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/partner">
              PARTNER WITH US
            </Link>
          </div>
        </div>
        <div className="contact">
          <h2>CONTACT US</h2>
          <h3>LOCAL: +234 806 3529 030</h3>
          <h3>USA: +13464810389</h3>
          <h3>greatwomenmission@gmail.com</h3>
        </div>
      </div>
      <div className="copyright">
        <p>gwom all rights reserved &copy;copyright 2021 </p>
      </div>
    </div>
  )
})`
  height:50vh;
  width:100%;
  background: ${({theme})=>theme.colors.primary};
  background-size:cover;
  color:white;
  line-height:2;
  position:relative;
  .footer-container {
    width:80%;
    margin: 0 auto;
    padding:35px 0;
    display:flex;
    justify-content: space-around;
    align-items:center;
    flex-flow:row wrap;
    align-items:flex-start;
    border-bottom:1px solid white;
  }
  .nav-item:hover {
    opacity:.5;
  }
  .nav-item a, .nav-item a:visited, .nav-item a:hover {
    color:white;
  }
  .copyright {
    width:100%;
    text-align:center;
    position:absolute;
    bottom:0;
    opacity:.5;
  }
  @media (max-width:600px){
    height:auto;
    .footer-container {
      justify-content:flex-start;
      padding:30px 0 40px 0px;
    }
    .footer-container > * {
      padding-top:20px;
    }
    .copyright {
      position:relative;
      padding:6px 0;
    }
  }

`

export default Footer;