import styled from "styled-components";
import BlogPost from "../BlogPost"
import ScrollAnimation from 'react-animate-on-scroll';
import posts from "../../pages/blog/Posts"


const RecentBlogPosts = styled(({className})=>{
  const reduceString = (body) => {
    let newArray = body.split("", 200).concat("...");
      return newArray;
  }
  return(
    <div className={className}>
      <ScrollAnimation animateOnce={true} duration={0.6} animateIn="fadeIn">
        <h2 className="blog-header">RECENT BLOG POSTS</h2>
      </ScrollAnimation>
      {
        posts.slice(0, 3).map((post, idx)=>{
          // let body = post.body.split("")
          // if(body.length > 0){
          //   `${body.length = 30}...`;
          // }
         return (
          <BlogPost key={idx} title={post.title} body={reduceString(post.body)} />
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