import styled from "styled-components";
import ScrollAnimation from 'react-animate-on-scroll';
import Button from "../Button";

const BlogPost = styled(({className, title, snippet})=>{
  return(
    <ScrollAnimation animateOnce={true} duration={0.6} animateIn="fadeInUp">
      <div className={className}>
          <div className="post">
            <div className="post-title">
              <h2>{title}</h2>
            </div>
            <div className="post-snippet">
              <p>{snippet}</p>
            </div>
            <Button outline label="VIEW MORE" />
          </div>
      </div>
    </ScrollAnimation>
  )
})`
  width:80%;
  margin:0 auto 50px;
  padding: 0 30px 30px; 
  background:${({theme})=>theme.colors.primary};
  color:${({theme})=>theme.colors.primary};
  text-align:left;
  z-index:11;
  position:relative;
  box-shadow:0 2px 5px rgba(0,0,0,.15);
  &:after{
    content:"";
    position:absolute;
    bottom:0;
    left:0;
    height:100%;
    width:100%;
    z-index:-1;
    border-radius:15px 0 0 0;
    background:${({theme})=>theme.colors.white};

  }
  
  .post{
    .post-title {
      padding:25px 0;
      position:relative;
    }
    .post-title:before{
      content:"";
      position:absolute;
      bottom:0;
      left:0;
      height:3px;
      width:15px;
      background:${({theme})=>theme.colors.primary};

    }

    .post-snippet {
      line-height:1.4em;
      background:white;
    }
  }

  @media (max-width:600px){
    width:90%;
  }
`

export default BlogPost;