import Link from "next/link";
import styled from "styled-components";
import useSnackbar from "../../hooks/useSnackBar";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogPost from "../BlogPost"


const BackOffice = styled(({className})=>{
  const [blogPost, setBlogPost] = useState([]);
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const {showSuccess, showError} = useSnackbar()

  useEffect( async ()=>{
    axios.all([
      await  await axios
        .get(`https://polar-peak-99687.herokuapp.com/blog/`)
        .then(({ data }) => {
          setBlogPost(data);
          console.log("data", data);
          setLoading(false)
        })
        .catch((error) => console.log(error)),
        // IMAGE GET REQUEST
      // await axios.get("https://polar-peak-99687.herokuapp.com/blog/image")
      //   .then(data=>console.log(data))
      //   .catch(error=>console.log(error)),
      
    ])
  },[loading])

  const handleChange = (e) =>{
    return (e.target.value)
  }
  const handleSubmit = async (e)=> {
    e.preventDefault()
    const data = {title, body}
    axios.all([
      await axios.post("https://polar-peak-99687.herokuapp.com/blog/createPost", data)
        .then(result=> {console.log(result)
          showSuccess("Article posted successfully")
          setLoading(true);
        })
        .catch(error=> {console.log(error)
          showError("Article submit, not successful")  
        }),
        // IMAGE POST REQUEST
      // await axios.post("https://polar-peak-99687.herokuapp.com/blog/add-image", image)
      //   .then(result=> {console.log(result)
      //     showSuccess("image uploaded successfully")
      //   })
      //   .catch(error=> {console.log(error)
      //     showError("image upload, not successful")  
      //   }),

    ])
    e.target.reset();
    
  }
  const reduceString = (body) => {
    let newArray = body.split("", 200).concat("...");
      return newArray;
  }
  return(
      <div className={className}>
        <div className="return">
          <Link href="/blog">
            <a>Return to blog</a>
          </Link>
        </div>
        <h1>CREATE BLOG POST</h1>
        <div className="admin-form">
          <form action="" method="post" onChange={handleChange} onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input onChange={(e)=>setTitle(e.target.value)} type="text" htmlFor="title" name="title" placeholder="Enter post title" required/>
            <label htmlFor="body">Article</label>
            <textarea onChange={(e)=>setBody(e.target.value)} name="body" placeholder="Enter Blog article here" id="" cols="30" rows="10"></textarea>
            {/* <label htmlFor="body">Add image (PNG)</label>
            <input type="file" name="image" id="" onChange={handleChange} required /> */}
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
        <div className="posts">
          {loading && <h3>Loading...</h3>}
          {blogPost && 
            blogPost.map((post, idx)=>{
            return (
              <BlogPost key={idx} title={post.title} body={reduceString(post.body)} />
            )
            })
          }
        </div>
      </div>
  )
})`
width:50%;
margin:50px auto 0;
text-align:center;
color:${({theme})=>theme.colors.primary};
.return a {
  position:absolute;
  top:20px;
  left:30px;
  padding:10px;
  color:${({theme})=>theme.colors.primary};
  border:1px solid ${({theme})=>theme.colors.primary};
}
.admin-form {
  border:1px solid ${({theme})=>theme.colors.primary};
  margin-top:50px;
  padding:30px 20px;
  box-shadow:0 2px 15px rgba(0,0,0,.15);
  input,textarea {
    background:${({theme})=>theme.colors.white};
    width:100%;
    padding:10px;
    margin:10px 0 15px;
    border:none;
    outline:none;
    border:1px solid ${({theme})=>theme.colors.primary};
    color:${({theme})=>theme.colors.primary};
    resize:none;
  }
  input[type="submit"] {font-weight: bold;}
  input[type="submit"]:hover {
    transition:.3s;
    background:${({theme})=>theme.colors.primary};
    color:${({theme})=>theme.colors.white};
    box-shadow: 0 2px 5px rgba(0,0,0,.5);
  }
  input::placeholder, textarea::placeholder {
    font-family:monospace;
    color:${({theme})=>theme.colors.primary};
    opacity:.5;}
  input[type="submit"]:active {
    box-shadow: 0 0px 2px rgba(0,0,0,.5);
  }
}
.posts {
  margin:100px 0;
}

@media (max-width:600px){
  margin:100px auto;
  width:90%;
}
`

export default BackOffice;

