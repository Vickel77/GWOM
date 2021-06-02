import styled from "styled-components";
import ScrollAnimation from 'react-animate-on-scroll';
import Button from "../Button";
import Link from "next/link";

const BlogPost = styled(({className, title, body, onBlogPage})=>{
  return(
    <ScrollAnimation animateOnce={true} duration={0.6} animateIn="fadeInUp">
      <div className={className}>
          <div className="post">
            <div className="post-title">
              <h2>{title}</h2>
            </div>
            <div className="post-snippet">
              <p>{body}</p>
            </div>
            {
              !onBlogPage &&
              <Link href="/blog">
                <a>
                  <Button outline label="VISIT BLOG" />
                </a>
              </Link>
            }
          </div>
      </div>
    </ScrollAnimation>
  )
})`
  width:80%;
  margin:0 auto 100px;
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
      padding:35px 0;
      position:relative;
      margin-bottom:30px;
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
      line-height:2em;
      word-spacing:.2em;
      word-break:break-word;
      text-align:justify;
      background:white;
    }
  }

  @media (max-width:600px){
    width:90%;
  }
`

export default BlogPost;