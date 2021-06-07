import {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import ScrollAnimation from 'react-animate-on-scroll';
import BlogPost from "../BlogPost"

const RecentBlogPosts = styled(({className})=>{
  const [blogPost, setBlogPost] = useState([]);
  const [blogError, setBlogError] = useState(false)
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    await axios
      .get(`https://polar-peak-99687.herokuapp.com/blog/`)
      .then(({ data }) => {
        setBlogPost(data);
        setLoading(false);
        setBlogError(false)
      })
      .catch((error) => {
        setBlogError(true)
        console.log(error)
      });
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
      { 
        blogError ?
          <p style={{textAlign:"center",opacity:"0.5", fontSize:".8em"}}>
            unable to load blog posts<br/>
            Please check your connection and try again
          </p> : 
          loading ? "loading Posts..." :
          blogPost && 
            blogPost.map((post, idx)=>{
              return (
                <BlogPost key={idx} title={post.title} deletePost={()=>handleDelete(post._id)} body={reduceString(post.body)} />
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