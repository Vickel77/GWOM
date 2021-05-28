import {
  Layout, 
  Header, 
  MissionVision, 
  Services, 
  AboutSnippet, 
  RecentBlogPosts,
  Gallery} from "../components/Layout";
const Home = () =>{
  return (
    <div>
      <main>
        <Layout>
          <Header />
          <AboutSnippet />
          <MissionVision />
          <Services />
          <RecentBlogPosts />
          <Gallery />
        </Layout>
      </main>
    </div>
  )
}
export default Home;
