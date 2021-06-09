import styled from "styled-components";

const Card = styled(({className, title, children}) =>{
  return (
    <div className={className}>
      <div className="card-image">
        <div className="card-title">
          <h2>{title}</h2>
        </div>
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
box-shadow:0 2px 5px rgba(0,0,0,.15);
&:hover .card-image{
  background-size: 110% 110%;
  transition:.3s ease-out;
}
&:hover .card-title {
  transition:.3s ease-out;
  background: #AC5BC7cc;
}

.card-image {
  border-radius:15px 0 15px 0;
  overflow:hidden;
  background:${({ image })=> image ? `url("${image}.jpg")` :
    `-webkit-linear-gradient(#AC5BC7aa, #AC5BC7cc)`};
  background-size:100% 100%;
  height:266px;
  widht:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
}
.card-title {
  height:100%;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  text-shadow:1px 1px 2.5px rgba(0,0,0,.5);
}
.card-text {
  height:calc(450px - 266px);
  width:70%;
  margin: 0 auto;
  display:flex;
  justify-content:center;
  align-items:center;
  color:${({theme})=>theme.colors.primaryText};
  line-height:1.5em;
  word-spacing:.2em;
}
@media (max-width:600px){
  margin-bottom:20px;
}

`

export default Card;