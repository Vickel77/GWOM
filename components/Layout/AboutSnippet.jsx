import styled from "styled-components";
import Link from "next/link";
import Button from "../Button";
import ScrollAnimation from 'react-animate-on-scroll';

const AboutHeader = ({letter}) =>{
  return(
    <ScrollAnimation offset={60} animateOnce={true} duration={0.5} animateIn="fadeIn">
      <h2>{letter}</h2>
    </ScrollAnimation>
  )
}

const AboutSnippet = styled(({className})=>{
  return(
    <div className={className}>
      <div className="about-left">
        <AboutHeader letter="A" />
        <AboutHeader letter="B" />
        <AboutHeader letter="O" />
        <AboutHeader letter="U" />
        <AboutHeader letter="T" />
      </div>
      <div className="about-right">
        <ScrollAnimation animateOnce={true} duration={0.8} animateIn="fadeIn">
          <div className="right-content">
            <div className="founder">
              <img width="300px" src="founder.jpg" alt="founder's image" /><br />
              <b>Mrs Gloria Okoroigwe</b><br />
              <b>Founder</b>
            </div>
            <div className="about-text">
              <p>
                Great women on the mission is a Non-Governmental Organization made up of respectful, responsible and compassionate
                stewards ever ready to meet needs of less priviledged young girls and women through philanthropic services among many others.
              </p>
              <Link href="/about">
                <a>
                  <Button label="SEE MORE" />
                </a>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
})`
  height:545px;
  width:100vw;
  margin: 0 auto 0px;
  display:flex;
  .about-left {
    height:inherit;
    width:18%;
    background:${({theme})=>theme.colors.primary};
    color:${({theme})=>theme.colors.white};
    display:flex;
    flex-flow:column nowrap;
    justify-content:space-around;
    align-items:center;
    padding:30px 0;
    
  }
  .about-left h2 {
    font-size:2em;
  }
  .about-right {
    height:inherit;
    width:82%;
    color:${({theme})=>theme.colors.primary};
    background-color:white;
    display:flex;
    flex-flow:column nowarp;
    justify-content:space-between;
    align-items:center;
    .right-content {  
      width:80%;
      margin: 0 auto;
    }
    .founder {
      margin-bottom:50px;
      text-align:center;

      img{
        border-radius:50%;
      }
    }
  }
  .about-text {
    line-height:2em;
    word-spacing:.5em;
  }


`

export default AboutSnippet;