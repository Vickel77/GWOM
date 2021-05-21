import styled from "styled-components";

const Card = styled(({className, title, children}) =>{
  return (
    <div className={className}>
      <div className="card-image">
        <h2>{title}</h2>
      </div>
      <div className="card-text">
        {children}
      </div>
    </div>
  )
})`

background-color:white;
height:450px;
min-width:328px;
width:328px;
border-radius:15px 0 0 0;
.card-image {
  background:url("${(props)=>props.image}.png");
  background-size:100% 100%;
  height:266px;
  widht:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
}
.card-text {
  height:calc(450px - 266px);
  width:70%;
  margin: 0 auto;
  display:flex;
  justify-content:center;
  align-items:center;
  color:${({theme})=>theme.colors.primary};
}
@media (max-width:600px){
  margin-bottom:20px;
}

`

export default Card;