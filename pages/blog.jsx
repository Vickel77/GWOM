import Head from 'next/head';
import styled from "styled-components";
import { Layout } from '../components/Layout';

const Blog = styled(({className})=>{
  return(
    <>
      <Head>
      </Head>
      <Layout>
        <h1>BLOG</h1>
      </Layout>
    </>
  )
})`

`

export default Blog;