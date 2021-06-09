import styled from "styled-components";

const AltHeader = styled(({className, title, subTitle})=>{
  return(
    <div className={className}>
      <h1 className="title">
        {title}
        <br />
        <span className="subTitle">
          {subTitle}
        </span>
      </h1>
    </div>
  )
})`
width:100vw;
height:50vh;
color:${({theme})=>theme.colors.white};
display:flex;
justify-content:center;
align-items:center;
text-align:center;
background:${({bgImage, theme}) => bgImage? `-webkit-linear-gradient(45deg, #9B4AB655, #7928B4DD) ,url(${bgImage})`: theme.colors.primary};
background-size:cover;
background-position:50% 50%;
font-family:'Lobster', cursive;

.title {
  font-size:2.5em;
  font-weight:normal;
  text-shadow:0 0 5px rgba(0,0,0,.5);
  .subTitle {
    font-weight:normal;
    font-size:0.5em;
  }
}

@media (max-width:600px){
  .title {
    font-size:2em;
  }
}
`

export default AltHeader;