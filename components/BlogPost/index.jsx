import styled from "styled-components";
import ScrollAnimation from 'react-animate-on-scroll';
import Button from "../Button";
import Link from "next/link";

const BlogPost = styled(({className, title, body, postButton, handleRoute})=>{
  return(
    <ScrollAnimation animateOnce={true} duration={0.6} animateIn="fadeInUp">
      <div className={className}>
          <div className="post">
            <div className="post-title">
              <h2>{title}</h2>
            </div>
            <div className="post-snippet">
              <p>{body}</p>
              {
                !postButton ?
                <Link href="/blog">
                  <a>
                    <Button outline label="VISIT BLOG" />
                  </a>
                </Link>: postButton=="remove" ?
                <></> : <a onClick={handleRoute}>
                  <Button outline label="VIEW MORE" />
                </a>
              }
            </div>
            
          </div>
      </div>
    </ScrollAnimation>
  )
})`
  width:80%;
  margin:0 auto 50px;
  color:${({theme})=>theme.colors.primary};
  background:${({theme})=>theme.colors.primary};
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
      width:100%;
      padding: 15px 20px 10px; 
      position:relative;
      margin-bottom:30px;
    }

    .post-snippet {
      line-height:2em;
      word-spacing:.2em;
      word-break:break-word;
      text-align:justify;
      background:white;
      padding: 0px 20px 10px; 
      
    }
  }

  @media (max-width:600px){
    width:90%;
  }
`

export default BlogPost;