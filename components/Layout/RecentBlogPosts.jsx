import {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import ScrollAnimation from 'react-animate-on-scroll';
import BlogPost from "../BlogPost"

const RecentBlogPosts = styled(({className})=>{
  const [blogPost, setBlogPost] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    await axios
      .get(`https://polar-peak-99687.herokuapp.com/blog/`)
      .then(({ data }) => {
        setBlogPost(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [loading]);
  const reduceString = (body) => {
    let newArray = body.split("", 200).concat("...");
      return newArray;
  }
  return(
    <div className={className}>
      <ScrollAnimation animateOnce={true} duration={0.6} animateIn="fadeIn">
        <h2 className="blog-header">RECENT BLOG POSTS</h2>
      </ScrollAnimation>
      {loading && <h3 align="center">loading...</h3>}
      {blogPost && 
        blogPost.slice(0, 3).map((post, idx)=>{
         return (
          <BlogPost key={idx} title={post.title} body={reduceString(post.body)} />
         )
        })
      }
    </div>
  )
})`
  margin-bottom:100px;
  color:${({theme})=>theme.colors.primary};
  .blog-header {
    padding-bottom:50px;
    text-align:center;
    font-size:2.3em;
  }

`

export default RecentBlogPosts;