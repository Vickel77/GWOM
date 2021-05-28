import styled from "styled-components";

const Gallery = styled(({className})=>{
  return(
    <div className={className}>
      <h2 className="gallery-header">GALLERY</h2>
      <div className="media">
        <div className="video">
          <h3>OUTREACH 1</h3>
          <video width="100%" height="240" src="gwom-2.mp4" controls={true} ></video>
        </div>
        <div className="video">
          <h3>OUTREACH 2</h3>
          <video width="100%" height="240" src="gwom-4.mp4" controls={true} ></video>
        </div>
      </div>
    </div>
  )
})`
  width:90%;
  margin:0 auto;
  margin-bottom:100px;
  overflow:hidden;
  color:${({theme})=>theme.colors.primary};
  text-align:center;
  .gallery-header {
    padding-bottom:50px;
    font-size:2.3em;
  }
  .media {
    width:100%;
    .video {
      h3 {padding-bottom:10px;}
      width:100%;
      margin-bottom:10px;
    }
  }
  @media (min-width:600px){
    width:90%;
    .media {
      width:100%;
      display:flex;
      justify-content:space-around;
      align-items:center;
    }
  }
`

export default Gallery;