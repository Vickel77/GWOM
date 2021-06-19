import styled from "styled-components";
import Menu from "../Menu";
const Header = styled(({className}) =>{
  return(
    <header className={className}>
      <div className="header-title">
        <h1 className="light-text">GREAT WOMEN ON <br /> THE MISSION</h1>
        <h1>CALL TO SERVE</h1>
      </div>
      <div className="first-layer" />
      <div className="second-layer" />
    </header>
  )
})`
background:url("header-bg.jpg");
background-size:cover;
background-position:50% 70%;
height:100vh;
width:100vw;
padding-top: 100px;
color: ${({theme})=>theme.colors.primaryText};
position:relative;
display:flex;
align-items:center;

.first-layer {
  background-color:rgba(255,255,255,.7);
  position:absolute;
  top:0;
  left:0;
  height:inherit;
  width:10%;
  z-index:0;
  transform-origin:0;
  animation:animate-div .7s;
}
@keyframes animate-div {
  from{transform:scale(0,1);}
  to{transform:scale(1);}
}
.second-layer {
  background-color:rgba(255,255,255,.7);
  position:absolute;
  top:0;
  left:0;
  height:inherit;
  width:45%;
  z-index:0;
  transform-origin:0;
  animation:animate-div 1s;
}
.header-title {
  z-index:11111;
  padding-bottom:30px;
  margin-left:60px;
  font-size:1.5em;
  color:${({theme})=> theme.colors.primaryText};
  position:relative;
  
}
.header-title h1 {animation:animate-text 2.2s;}
@keyframes animate-text {
  from{transform:translateY(20px);
      opacity:0;}
  30%{transform:translateY(20px);
    opacity:0;}
  to{transform:translateY(0px);
    opacity:1;}
}

.header-title::before {
  content:"";
  background:${({theme})=>theme.colors.primaryText};
  position:absolute;
  bottom:0;
  left:0;
  width:100px;
  height:7px;
  animation: animate-line 1.5s;
}
@keyframes animate-line {
  from{transform:scale(0,1);}
  30%{transform:scale(0,1);}
  to{transform:scale(1);}
}
.light-text {
  font-weight:400;
}

@media (max-width:600px){
  background:-webkit-linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.5)),url("header-bg.jpg");
  height:80vh;
  padding-top: 100px;
  display:block;
  background-size:cover;
  background-position:50% 20%;
  .first-layer {
    width:100vw;
    height:30vh;
    position:absolute;
    bottom:0;
    left:0;
    transform-origin:50% 100%;
    display:none;
  }
  .second-layer {
    display:none;
  }
  .header-title{
    z-index:11111;
    padding-bottom:30px;
    margin-left:10px;
    color:${({theme})=> theme.colors.white};
    position:relative;
    font-size:1.2em;
  }
  .header-title::before {
    background:${({theme})=> theme.colors.white};
  }
}
`

export default Header;