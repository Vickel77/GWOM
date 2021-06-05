import styled from "styled-components";

const Menu = styled(({className, onClick}) =>{
  return (
    <div className={className} onClick={onClick}>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
      {/* <div className="bar" /> */}
    </div>
  )
})`
height:15px;
width:20px;
display:flex;
flex-flow:column wrap;
align-items:center;
justify-content:space-between;
&:hover {
  cursor:pointer;
}
&:hover .bar {
  background-color:white;
}
&:hover .bar:before{
  background:magenta;
}
.bar {
  background:magenta;
  height:2px;
  width:20px;
  position:relative;
  transition:.2s;
}
.bar:before{
  content:"";
  background-color:white;
  position:absolute;
  top:0;
  left:0;
  width:15px;
  height:2px;
  transition:.3s;
}

`

export default Menu;