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
  useEffect(async () => {
    await axios
      .get(`https://polar-peak-99687.herokuapp.com/blog/${ID}`)
      .then(({ data }) => {
        setBlogPost(data);
        setLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);

  return(
    <Layout>
      <div className={className}>
        <AltHeader title={blogPost.title} />
          <div className="post">
            {loading ? <p>loading...</p> :
              <BlogPost body={blogPost.body} postButton="remove"/>
            }
          </div>
      </div>
    </Layout>
  )
})`
color:${({theme})=>theme.colors.primary};
text-align:center;
${AltHeader} {
  font-family:raleway;
}
.post {
  margin:25px 0;
}

`

export default Details;
