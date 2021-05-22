import styled from "styled-components";
import Button from "../Button";
import ScrollAnimation from 'react-animate-on-scroll';

const Post = styled(({className, title, snippet})=>{
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
`
const RecentBlogPosts = styled(({className})=>{
  const posts = [
    {
      id: 1,
      title:"THE MANGROOVE OUTREACH",
      snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium.",
    },
    {
      id: 2,
      title:"GIVING FOOD",
      snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium.",
    },
    {
      id: 3,
      title:"WE CAME AGAIN",
      snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium.",
    }
  ]
  return(
    <div className={className}>
      <ScrollAnimation animateOnce={true} duration={0.6} animateIn="fadeIn">
        <h2 className="blog-header">RECENT BLOG POSTS</h2>
      </ScrollAnimation>
      {
        posts.map((post)=>{
         return (
          <Post key={post.id} title={post.title} snippet={post.snippet} />
         )
        })
      }
    </div>
  )
})`
  margin-bottom:100px;
  .blog-header {
    padding-bottom:50px;
    color:${({theme})=>theme.colors.primary};
    text-align:center;
    font-size:2.3em;
  }

`

export default RecentBlogPosts;