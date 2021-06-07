import Head from "next/head";
import styled from "styled-components";
import AltHeader from "../../components/AltHeader/AltHeader";
import { Layout } from "../../components/Layout";
import Link from "next/link"
import {useRouter} from "next/router"
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import BlogPost from "../../components/BlogPost";

const Blog = styled(({ className }) => {
  const [blogPost, setBlogPost] = useState([]);
  const [loading, setLoading] = useState(true)
  const [blogError, setBlogError] = useState(false)
  const [postId, setPostId] = useState();
  const router = useRouter();
  useEffect(async () => {
    setPostId();
    await axios
      .get("https://polar-peak-99687.herokuapp.com/blog")
      .then(({ data }) => {
        setBlogPost(data);
        setLoading(false)
        setBlogError(false);
      })
      .catch((error) => {
        setBlogError(true);
        console.log(error)
      });
  }, []);

  const handleRoute =(id)=>{
    router.push(`/blog/details?${id}`, undefined, {
      shallow: true,
    });
    setPostId(id);
  }
  const ID = !!router.query.ID || false;
  return (
    <>
      <Head></Head>
      <Layout>
        <div className={className}>
          <AltHeader title="GWOM BLOG" />
          <div className="posts">
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
                      <BlogPost key={_id}
                      id={_id} 
                      title={title} 
                      postButton
                      handleRoute={()=>handleRoute(_id)} />
                    )
                  })
            }
          </div> 
        </div>
      </Layout>
    </>
  );
})`
  & {
    .posts {
      margin: 50px auto;
      color: ${({ theme }) => theme.colors.primary};
      ${BlogPost} {
        margin-bottom: 25px;
      }
    }
  }
`;

export default Blog;
