import styled from "styled-components";
import NavBar from "../NavBar";
import Footer from "./Footer";

const Layout = styled(({className, children})=>{
  return(
    <>
      <NavBar />
        {children}
      <Footer />
    </>
  )
})`

`

export default Layout;