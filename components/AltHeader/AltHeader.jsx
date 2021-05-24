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
height:40vh;
color:${({theme})=>theme.colors.white};
display:flex;
justify-content:center;
align-items:center;
text-align:center;
background:${({bgImage, theme}) => bgImage? `url(${bgImage})`: theme.colors.primary};
.title {
  font-size:2.5em;
  .subTitle {
    font-size:2.2em;
  }
}
`

export default AltHeader;