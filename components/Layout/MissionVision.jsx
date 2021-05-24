import styled from "styled-components";
import ScrollAnimation from 'react-animate-on-scroll';

const MissionVision = styled(({className})=>{
  return(
    <div className={className}>
      <div className="mission">
        <ScrollAnimation animateOnce={true} duration={0.4} animateIn="fadeIn">
          <h2>MISSION</h2>
          <p>To bring empowerment and encouragement to
            females all over the world, and let them know they
            can achieve great things and live their dreams
          </p>
        </ScrollAnimation>
      </div>
      <div className="vision">
      <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeIn">
          <h2>VISION</h2>
          <p>We are a purpose driven
            people, who are called to serve
            humanity especially the feminine gender
          </p>
      </ScrollAnimation>
      </div>
    </div>
  )
})`
  height: 65vh;
  width: 100vw;
  display:flex;
  flex-flow:row wrap;
  text-align:center;
  line-height:1.7em;
  .mission, 
  .vision {
    height:65vh;
    width:50%;
    display:flex;
    justify-content: center;
    align-items:center;
  }
  .mission h2, 
    .vision h2 {padding-bottom:20px;}
  .mission p, 
    .vision p {
      width:80%;
      margin:0 auto;
    }

  .mission {
    background-color:${({theme})=>theme.colors.white};
    color:${({theme})=>theme.colors.primary};
  }
  .vision {
    background-color:${({theme})=>theme.colors.primary};
    color:white;
  }
  @media (max-width:600px){
    height: auto;
    .mission, 
    .vision {
      height:50vh;
      min-width:100%;
    }
  }
`

export default MissionVision;