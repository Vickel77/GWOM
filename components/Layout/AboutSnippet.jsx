import styled from "styled-components";
import Button from "../Button";
import ScrollAnimation from 'react-animate-on-scroll';

const AboutSnippet = styled(({className})=>{
  return(
    <div className={className}>
      <div className="about-left">

      </div>
      <div className="about-right">
        <ScrollAnimation animateOnce={true} duration={0.8} animateIn="fadeIn">
          <div className="about-text">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia minima libero excepturi nobis, impedit dicta laboriosam, culpa tempore facere corrupti obcaecati quae, adipisci porro reiciendis officia corporis necessitatibus nam perspiciatis! Facilis alias placeat, natus deserunt minus libero dignissimos! Assumenda hic totam aut sunt molestiae rem itaque eligendi eius quo a.
            </p>
            <Button label="SEE MORE" />
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
    background:url('about-left.jpg');
    background-size:100% 100%;
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

  @media(max-width:600px){
    .about-left {
      background:url("about-left-m.png");
    }
  }
`

export default AboutSnippet;