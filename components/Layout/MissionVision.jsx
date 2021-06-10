import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const MissionVision = styled(({ className }) => {
  return (
    <div className={className}>
      <div className="mission">
        <ScrollAnimation animateOnce={true} duration={0.4} animateIn="fadeIn">
          <h2>MISSION</h2>
          <p>
            Great Women on a Mission is dedicated to enhancing the lives of
            impoverished girls and women through philanthropic practices and
            inspiration so that individuals understand that despite the
            impoverished circumstances they may currently be experiencing, it is
            possible to lay the bedrock, the foundation of a bright and glorious
            future.
          </p>
        </ScrollAnimation>
      </div>
      <div className="vision">
        <ScrollAnimation animateOnce={true} duration={1} animateIn="fadeIn">
          <h2>VISION</h2>
          <p>
            To make Great Women on a Mission the leading Non-Governmental
            Organization recognized for philanthropic services to less
            privileged and impoverished young women and girls through the
            dissemination of best practices in the dissemination of activities
            of the Organization.
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
})`
  height: 65vh;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  text-align: justify;
  line-height: 1.7em;
  word-spacing:.2em;
  .mission,
  .vision {
    height: 65vh;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mission h2,
  .vision h2 {
    padding-bottom: 20px;
    text-align:center;
  }
  .mission p,
  .vision p {
    width: 80%;
    margin: 0 auto;
  }

  
  .vision {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
  @media (max-width: 600px) {
    height: auto;
    .mission,
    .vision {
      height: 55vh;
      min-width: 100%;
    }
  }
`;

export default MissionVision;
