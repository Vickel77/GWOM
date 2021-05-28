import styled from "styled-components";
import BlogPost from "../BlogPost"
import ScrollAnimation from 'react-animate-on-scroll';


const RecentBlogPosts = styled(({className})=>{
  const posts = [
    {
      id: 1,
      title:"THE MANGROOVE OUTREACH",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium.",
    },
    {
      id: 2,
      title:"GIVING FOOD",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium.",
    },
    {
      id: 3,
      title:"WE CAME AGAIN",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium.",
    }
  ]
  return(
    <div className={className}>
      <ScrollAnimation animateOnce={true} duration={0.6} animateIn="fadeIn">
        <h2 className="blog-header">RECENT BLOG POSTS</h2>
      </ScrollAnimation>
      {
        posts.map((post)=>{
         return (
          <BlogPost key={post.id} title={post.title} body={post.body} />
         )
        })
      }
    </div>
  )
})`
  margin-bottom:100px;
  .blog-header {
    padding-bottom:50px;
    color:${({theme})=>theme.colors.primary};
    text-align:center;
    font-size:2.3em;
  }

`

export default RecentBlogPosts;