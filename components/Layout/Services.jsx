import styled from "styled-components";
import Button from "../Button";
import Card from "../Card";
import ScrollAnimation from 'react-animate-on-scroll';

const Services = styled(({className}) => {
  return(
      <div className={className}>
        <ScrollAnimation animateOnce={true} duration={0.6} animateIn="fadeIn">
          <h2 className="cards-header">PROGRAMES</h2>
        </ScrollAnimation>
        <div className="card-section">
          <ScrollAnimation animateOnce={true} duration={0.5} animateIn="fadeInRight">
            <Card image="card-1" title="FOOD OUTREACH">
              We carryout outreaches
              where we distribute food
              and food items to women 
              in need
            </Card>
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} duration={0.8} animateIn="fadeInRight">
            <Card image="card-2" title="WELFARE GIFTINGS">
              We carryout outreaches
              where we distribute food
              and food items to women 
              in need
            </Card>
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} duration={1.1} animateIn="fadeInRight">
            <Card image="card-3" title="HELPING HANDS">
              We carryout outreaches
              where we distribute food
              and food items to women 
              in need
            </Card>
          </ScrollAnimation>
        </div>
        <div className="support">
          <h2>SUPPORT THE GOOD WORK </h2>
          <Button label="MAKE A DONATION" />
        </div>
      </div>
  )
})`

width:100vw;
padding:100px 0;
color:${({theme})=> theme.colors.primary};
.cards-header {
  font-size:2.3em;
  text-align:center;
  padding-bottom:50px;
}
.card-section {
  display:flex;
  justify-content:space-around;
  flex-flow:row wrap;
  
}
.support {
  width:100%;
  margin:50px auto 0;
  background:white;
  display:flex;
  justify-content:space-around;
  align-items:center;
  padding:15px;
  color:${({theme})=> theme.colors.primary};
}
@media(max-width:600px){
  .support {width:100%}
}
`

export default Services;