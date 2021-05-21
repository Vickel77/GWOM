import styled from "styled-components";

const Gallery = styled(({className})=>{
  return(
    <div className={className}>
    </div>
  )
})`
  height:100vh;
  width:80%;
  margin:0 auto;
  border:1px solid red;
  margin-bottom:100px;
  overflow:hidden;
`

export default Gallery;