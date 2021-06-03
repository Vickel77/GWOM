import styled from "styled-components"; 
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BlogPost from "../../components/BlogPost";
import { Layout } from "../../components/Layout";
import axios from "axios";
import AltHeader from "../../components/AltHeader/AltHeader";

const Details = styled(({className, id})=>{
  const router = useRouter();
  const [blogPost, setBlogPost] = useState([]);
  const [loading, setLoading] = useState(true)
  const ID = Object.keys(router.query)
  console.log("query param", ID);
  useEffect(async () => {
    await axios
      .get(`https://polar-peak-99687.herokuapp.com/blog/${ID}`)
      .then(({ data }) => {
        setBlogPost(data);
        console.log("details", data);
        setLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);

  return(
    <Layout>
      <div className={className}>
        <AltHeader title="GWOM BLOG" />
          <div className="post">
            {loading ? <p>loading...</p> :
              <BlogPost title={blogPost.title} body={blogPost.body} onBlogPage/>
            }
          </div>
      </div>
    </Layout>
  )
})`
color:${({theme})=>theme.colors.primary};
text-align:center;
.post {
  margin:25px 0;
}

`

export default Details;
