import Head from "next/head";
import styled from "styled-components";
import AltHeader from "../../components/AltHeader/AltHeader";
import { Layout } from "../../components/Layout";
import BlogPost from "../../components/BlogPost";
import axios from "axios";
import { useState, useEffect } from "react";

const Blog = styled(({ className }) => {
  const [blogPost, setBlogPost] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(async () => {
    await axios
      .get("https://polar-peak-99687.herokuapp.com/blog")
      .then(({ data }) => {
        setBlogPost(data);
        console.log("data", data);
        setLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);
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
              blogPost.map(({ title, body }, idx) => {
                return <BlogPost key={idx} title={title} body={body} onBlogPage />;
              })}
          </div>
        </div>
      </Layout>
    </>
  );
})`
  & {
    .posts {
      margin: 100px auto;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default Blog;
