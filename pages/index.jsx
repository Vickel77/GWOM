import {
  Layout, 
  Header, 
  MissionVision, 
  Programes, 
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
          <Programes />
          <RecentBlogPosts />
          <Gallery />
        </Layout>
      </main>
    </div>
  )
}
export default Home;
