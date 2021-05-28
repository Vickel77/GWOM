import Head from "next/head";
import styled from "styled-components";
import AltHeader from "../../components/AltHeader/AltHeader";
import { Layout } from "../../components/Layout";
import BlogPost from "../../components/BlogPost";

const Blog = styled(({ className }) => {
  const posts = [
    {
      id: 1,
      title: "THE MANGROOVE OUTREACH",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium.",
    },
    {
      id: 2,
      title: "GIVING FOOD",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium.",
    },
    {
      id: 3,
      title: "WE CAME AGAIN",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium.",
    },
    {
      id: 4,
      title: "HELPING GIRLS",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium.",
    },
    {
      id: 5,
      title: "THE SCHOLARSHIP PROGRAM",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt est facilis voluptatibus dicta reiciendis pariatur officia dolorum temporibus inventore dolores itaque asperiores aliquid laudantium.",
    },
  ];
  return (
    <>
      <Head></Head>
      <Layout>
        <div className={className}>
          <AltHeader title="GWOM BLOG" />
          <div className="posts">
            {posts.map((post) => {
              return (
                <BlogPost
                  key={post.id}
                  title={post.title}
                  body={post.body}
                />
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
})`
  & {
    
    .posts {
      margin:100px auto;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default Blog;
