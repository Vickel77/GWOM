import Link from "next/link";
import styled from "styled-components";
import useSnackbar from "../../hooks/useSnackBar";
import axios from "axios";

const Admin = styled(({className})=>{
  const {showSuccess} = useSnackbar()
  const handleSubmit =(e)=> {
    e.preventDefault()
    const data = {
      title: "AXIOS DATA",
      body: "some body"
    }
    // axios.post("http://localhost:5000/blog/createPost", data)
    //   .then(result=> console.log(result))
    //   .catch(error=> console.log(error))
    e.target.reset();
    
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
          <form action="" method="post" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" htmlFor="title" name="title" placeholder="Enter post title" required/>
            <label htmlFor="body">Article</label>
            <textarea name="body" placeholder="Enter Blog article here" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="SUBMIT" />
          </form>
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

@media (max-width:600px){
  margin:100px auto;
  width:90%;
}
`

export default Admin;

