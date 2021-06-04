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
  min-width:200px;
  padding:10px;
  color:${({theme})=>theme.colors.white};
  border-radius:15px 0 15px 0;
  border:1px solid ${({theme})=>theme.colors.primary};
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
        <AltHeader title="ABOUT" />
        <div className="about">
          <div className="about-img">
            <img width="450px" src="about-img.jpg" alt="about image of great women on a mission" />
          </div>
          <div className="about-text">
            Great women on the mission is a Non-Governmental Organization made up of respectful, responsible adn compassionate
            stewwards ever ready to meet needs of less priviledged youn girls and women through philantropic services amon many others.<br/> <br/>
            We are a group of people who through consistencyy, creativity, quick problem solving adn ideation, will ensyre that the girl
            child is given adequate representation adn treatment in every sphere of life.
          </div>
        </div>
        <div className="core-values">
          <h2 className="founder-story-header">CORE VALUES</h2>
          <div className="core-values-wrap">
            <ScrollAnimation animateOnce={true} duration={0.6} animateIn="fadeIn">
              <CoreValue 
                text="We are respectful, responsible and compassionate stewards ever ready to meet needs."
              />
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} duration={0.6} animateIn="fadeIn">
              <CoreValue 
                text="We promote honesty, integrity and openness in all that we do."
              />
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} duration={0.6} animateIn="fadeIn">
              <CoreValue 
                text="We further encourage creativity, quick problem solving and ideation to meet ever arising
                challenges and, we foster an environment of collaboration."
              />
            </ScrollAnimation>
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
                <b>Mrs Gloria Okoroigwe</b> who despite the odds accompannied with coming from a very humble background,
                  by grace and committment to possibilities of a great future has risen to become a woman of repute and today posits her
                  life to placate her <b>GREAT WOMEN ON A MISSION</b> humanitarian establishment.<br />
                  It looked like the drizzle turned into a rain right about the time she finished her Primary
                  Education and coming to the harsh reality that there would not be enough to further her
                  Education, even to the Secondary Level, she went ahead to serve as a Maid for several years.
                  And, when that did not churn out the expected results, she took her shots with what little she had
                  and went to Lagos, hoping and believing that greener pastures would avail themselves.
                  However, her greener pastures didn’t present themselves by way of a classy job
                  undeserved or a golden fleece. Her greener pastures presented themselves to her in form of a
                  friend who took her burdens upon her. Not long after, this friend advised her to sit for the then
                  General Certification Examinations (GCE). Reluctant to do so due to a lack of Secondary
                  Education, she eventually obliged having been informed that the examinations could be written
                  even without said level of education and registered for a brief training to aid her adequately
                  prepare for the examinations.<br />
                  It would seem as though the examinations were the beginning of her good fortune for, after
                  passing the GCE, she went on to apply to study in the University of Calabar where she graduated
                  with a degree in… (insert what her degree was in here)
                  One would say that after graduating from University, she could to some extent thrive on
                  her own. However, the Heavens would prove they were not done with her when a church
                  member and fellow grew affectionate toward her and presented her to her son; the son she
                  eventually married and joined overseas and as they say, the story goes on…
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
  color:${({theme})=>theme.colors.primary};
  line-height:1.5;
  .about {
    width:80%;
    margin: 100px auto 0;
    .about-text {
      line-height:2em;
      word-spacing:.2em;
      word-break:break-word;
      text-align:justify;
    }
    .about-img {
      float:left;
      padding-right:10px;
      img {
        border-radius:10px;
      }
    }
  }

  .core-values {
    background: ${({theme})=>theme.background};
    width:100%;
    padding: 100px 0;
    .core-values-wrap {
      width:80%;
      margin:50px auto 0;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-around;
    }
  }

  .founder-story-header {
    color:${({theme})=>theme.colors.primary};
    text-align:center;
    font-size:2.3em;
  }
  .founder-story-wrap {
    box-shadow:0 2px 10px rgba(0,0,0,.2);
    width:90%;
    margin:0 auto;
    margin-top:50px;
    padding:50px 0px;
  }
  .founder-story {
    display:flex;
    flex-flow:row wrap;
    justify-content:space-around;
    align-items:center;
    
  }
  .founder-story-img {
    background: url('founder.jpg') no-repeat;
    background-size:cover;
    border-radius: 50%;
    width:300px;
    height:300px;
    min-width:200px;
    align-self:flex-start;
  }
  .founder-story-text {
    width:65%;
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
    }
    .about-img{
      float:none;
      padding:0;
      margin-bottom:30px;
      img {width:100%;}
    }
    .core-values-wrap {
      width:100%;
      margin:0;
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