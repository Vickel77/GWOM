import styled from "styled-components";
import AltHeader from "../components/AltHeader/AltHeader";
import {Layout} from "../components/Layout"
import ScrollAnimation from 'react-animate-on-scroll';

const CoreValue = styled(({className, text})=>{
  return (
      <div className={className}>
        <p>{text}</p>
      </div>
  )
})`
  background:${({theme})=>theme.colors.primary};
  width:30%;
  padding:0px 10px;
  min-width:200px;
  color:${({theme})=>theme.colors.white};
  border-radius:15px 0 15px 0;  
  box-shadow:0 1px 5px rgba(0,0,0,.2);
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width:600px) {
    width:90%;
    margin: 10px auto;
  }
`

const About = styled(({className})=>{
  return(
    <Layout>
      <div className={className}>
        <AltHeader title="ABOUT" bgImage="about-img.jpg" />
        <div className="about">
          <div className="about-text">
            Great women on the mission is a Non-Governmental Organization made up of respectful, responsible and compassionate
            stewards ever ready to meet needs of less priviledged young girls and women through philantropic services among many others.<br/>
            We are a group of people who through consistency, creativity, quick problem solving and ideation, will ensure that the girl
            child is given adequate representation and treatment in every sphere of life.
          </div>
        </div>
        <div className="core-values">
          <h2 className="founder-story-header">CORE VALUES</h2>
          <div className="core-values-wrap">
              <CoreValue 
                text="We are respectful, responsible and compassionate stewards ever ready to meet needs."
              />
              <CoreValue 
                text="We promote honesty, integrity and openness in all that we do."
              />
              <CoreValue 
                text="We further encourage creativity, quick problem solving and ideation to meet ever arising
                challenges and, we foster an environment of collaboration."
              />
          </div>
        </div>
        <div className="founder-story-wrap">
          <h2 className="founder-story-header">FOUNDER's STORY</h2>
          <div className="founder-story">
            <div className="founder-story-img">
            </div>
            <div className="founder-story-text">
              <ScrollAnimation animateOnce={true} duration={0.6} animateIn="fadeIn">
                <p>
                  Born and raised in Nigeria (the most populated black nation on earth), <b>Mrs Gloria Okoroigwe</b> who
                  despite the odds accompanied with coming from a very humble background, by grace and sheer commitment to
                  possibilities of a great future has risen to become a woman of repute and today posits her life to placate
                  the ills of the girl child and women in general through her <b>GREAT WOMEN ON A MISSION</b> humanitarian establishment. <br />
                  Her passion for the girl child and women in general was inspired by the believe that with the right kind of leverage & help,
                  the girl child can rise to her full potential of becoming an impact to the society.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
})`
  margin-bottom:100px;
  color:${({theme})=>theme.colors.primaryText};
  line-height:1.5;
  text-align:center;
  .about {
    width:80%;
    margin:50px auto 0;
    .about-text {
      margin:0 auto;
      line-height:2em;
      text-align:justify;
    }
  }

  .core-values {
    background: ${({theme})=>theme.background};
    width:100%;
    padding:100px 0;
    .core-values-wrap {
      width:80%;
      margin:30px auto 0;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-between;
    }
  }

  .founder-story-header {
    color:${({theme})=>theme.colors.primary};
    text-align:center;
    font-size:2.3em;
  }
  .founder-story-wrap {
    box-shadow:0 2px 10px rgba(0,0,0,.2);
    border-radius:10px;
    width:80%;
    margin:0 auto;
    margin-top:50px;
    padding:50px 0px;
  }
  .founder-story {
    display:flex;
    flex-flow:column nowrap;
    justify-content:space-around;
    align-items:center;
    
  }
  .founder-story-img {
    width:300px;
    height:300px;
    min-width:200px;
    background: url('founder.jpg') no-repeat;
    background-position:50% 50%;
    background-size:cover;
    border-radius: 50%;
    margin:10px 0;
  }
  .founder-story-text {
    width:90%;
    line-height:2em;
    word-spacing:.2em;
    word-break:break-word;
    text-align:justify;
  }
  .about-img {
    
    border-radius:50%;
  }

  @media (max-width:600px){
    .about {
      width:90%;
      flex-flow:column;
      .about-text {
        width:100%;
      }
    }
    .about-img{
      padding:0;
      margin-bottom:10px;
      img {width:100%;}
    }
    .core-values {
      padding:50px 0;
      .core-values-wrap {
        width:100%;
        margin:0;
      }
    }

    .founder-story-wrap  {
      width:90%;
      padding:50px 10px;
    }
    .founder-story-img {
      margin:20px 0;
      width:200px;
      height:200px;
    }
    .founder-story-text  {
      width:70%;
    }
  }
`

export default About;