import Head from 'next/head';
import styled from "styled-components";
import { Layout } from '../components/Layout';

const Blog = styled(({className})=>{
  return(
    <>
      <Head>
      </Head>
      <Layout>
        <div className={className}>
          <h1>Blog</h1>
        </div>
      </Layout>
    </>
  )
})`
margin:100px 0;
color:${({theme})=>theme.colors.primary};
h1 {
  text-align:center;
}
`

export default Blog;