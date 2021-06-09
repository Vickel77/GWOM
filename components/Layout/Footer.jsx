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
          <ul>
            <li>+234 806 3529 030</li>
            <li>+234 803 7023 385</li>
            <li>USA: +13464810389</li>
            <li>greatwomenmission@gmail.com</li>
          </ul>
          <div className="social-icons">
            <a href="https://web.facebook.com/Great-Women-On-The-Mission-106654974976697/">
              <img src="fb-icon.png" height="20px" alt="great women facebook account" />
            </a>
            <a href="https://www.instagram.com/greatwomenmission/">
              <img src="ig-icon.png" height="20px" alt="great women instagram account" />
            </a>
            <a href="https://www.youtube.com/channel/UCq9n3pO8k7gvEPsATZrphsA/featured">
              <img src="youtube-icon.png" height="20px" alt="great women youtube account" />
            </a>
          </div>
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
  position:relative;
  .footer-container {
    width:80%;
    margin: 0 auto;
    padding:35px 0 10px;
    line-height:2;
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
  .contact {
    ul {
      margin:0;
      padding:0;
    }
    ul li {
      margin:0;
      padding:0;
      list-style-type: none;
    }
  }
  .social-icons {
    width:55%;
    display:flex;
    margin-top:10px;
    align-items:center;
    justify-content:space-between;
    a {
      filter:drop-shadow(0,0,5,rgba(0,0,0,.4));
    }
    a:hover {
      transition:.3s;
      opacity:.5;
    }
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