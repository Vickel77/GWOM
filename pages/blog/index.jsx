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
  const [postId, setPostId] = useState();
  const router = useRouter();
  useEffect(async () => {
    setPostId();
    await axios
      .get("https://polar-peak-99687.herokuapp.com/blog")
      .then(({ data }) => {
        setBlogPost(data);
        console.log("data", data);
        setLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);
  const reduceString = (body) => {
    let newArray = body.split("", 100).concat("...");
      return newArray;
  }
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
              <h3 align="center">
                {
                  loading && "loading Posts..."
                }
              </h3>
              {blogPost &&
                blogPost.map(({ _id, title, body }, idx) => {
                  return (
                      <BlogPost 
                        keys={_id}
                        id={_id} 
                        title={title} 
                        postButton
                        handleRoute={()=>handleRoute(_id)} />
                  )
                })}
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
