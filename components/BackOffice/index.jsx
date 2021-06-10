import Link from "next/link";
import styled from "styled-components";
import useSnackbar from "../../hooks/useSnackBar";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogPost from "../BlogPost"
import base from "../../pages/api/base";
import {AuthContext} from "../../context/Auth"
import Button from "../Button";

const BackOffice = styled(({className})=>{
  const [blogPost, setBlogPost] = useState([]);
  const [blogError, setBlogError] = useState(false);
  const [image, setImage] = useState("");
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
          setLoading(false)
          setBlogError(false);
        })
        .catch((error) => {
          setBlogError(true);
          console.log(error)
        }),
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
          // showSuccess("Article posted successfully")
          setLoading(true);
        })
        .catch(error=> {console.log(error)
          showError("Article submit, not successful")  
        }),
      
    ])
    // if (image) {
    //   await axios.post("https://polar-peak-99687.herokuapp.com/blog/add-image", image)
    //     .then(result=> {console.log(result)
    //       showSuccess("image uploaded successfully")
    //     })
    //     .catch(error=> {console.log(error)
    //       showError("image upload, not successful")  
    //   })

    // }
    e.target.reset();
    
  }

  const handleDelete =(id, e)=>{
    axios.delete(`https://polar-peak-99687.herokuapp.com/blog/${id}`)  
      .then(result => {  
        const posts = blogPost.filter(item => item.id !== id);  
        setBlogPost([...posts])
        setLoading(true);
      })  
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
          <Link href="#">
            <a onClick={()=>base.auth().signOut()}>Sign out</a>
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
            <input type="file" onChange={(e)=>setImage(e.target.value)} name="image" id="" /> */}
            <Button label="SUBMIT" type="submit" />
          </form>
        </div>
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
                  <BlogPost key={idx} title={post.title} deletePost={()=>handleDelete(post._id)} body={reduceString(post.body)} />
                )
              })
          }
        </div>
      </div>
  )
})`
width:50%;
margin:0 auto;
text-align:center;
color:${({theme})=>theme.colors.primaryText};
.return {
  width:100%;
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-between;
  margin: 20px auto 30px;
}
.return a {
  font-size:.7em;
  padding:10px;
  color:${({theme})=>theme.colors.primary};
  border:1px solid ${({theme})=>theme.colors.primaryText};
}
.return a:active {
  background:${({theme})=>theme.colors.primary};
  color:${({theme})=>theme.colors.white};
}
.admin-form {
  border:1px solid ${({theme})=>theme.colors.primaryText};
  margin-top: 20px;
  padding:30px 20px;
  box-shadow:0 2px 15px rgba(0,0,0,.15);
  input,textarea {
    background:${({theme})=>theme.colors.white};
    width:100%;
    padding:10px;
    margin:10px 0 15px;
    border:none;
    outline:none;
    border-bottom:1px solid ${({theme})=>theme.colors.primaryText};
    color:${({theme})=>theme.colors.primaryText};
    resize:none;
  }
  input[type="submit"] {font-weight: bold; color:${({theme})=>theme.colors.primaryText};}
  input[type="submit"]:hover {
    transition:.3s;
    background:${({theme})=>theme.colors.primary};
    color:${({theme})=>theme.colors.white};
    box-shadow: 0 2px 5px rgba(0,0,0,.5);
  }
  input::placeholder, textarea::placeholder {
    font-family:monospace;
    color:${({theme})=>theme.colors.primaryText};
    opacity:.5;}
  input[type="submit"]:active {
    box-shadow: 0 0px 2px rgba(0,0,0,.5);
  }
}
.posts {
  margin:100px auto;
}

@media (max-width:600px){
  margin:0px auto;
  width:90%;
}
`

export default BackOffice;

