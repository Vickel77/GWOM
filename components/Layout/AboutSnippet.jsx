import styled from "styled-components";
import Link from "next/link";
import Button from "../Button";
import ScrollAnimation from 'react-animate-on-scroll';

const AboutHeader = ({letter}) =>{
  return(
    <ScrollAnimation offset={200} animateOnce={true} duration={0.5} animateIn="fadeIn">
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
          <div className="about-text">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia minima libero excepturi nobis, impedit dicta laboriosam, culpa tempore facere corrupti obcaecati quae, adipisci porro reiciendis officia corporis necessitatibus nam perspiciatis! Facilis alias placeat, natus deserunt minus libero dignissimos! Assumenda hic totam aut sunt molestiae rem itaque eligendi eius quo a.
            </p>
            <Link href="/about">
              <a>
                <Button label="SEE MORE" />
              </a>
            </Link>
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
    justify-content:center;
    align-items:center;
  }
  .about-text {
    width:80%;
    margin: 0 auto;
    line-height:1.5;
  }


`

export default AboutSnippet;