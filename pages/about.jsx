import styled from "styled-components";
import AltHeader from "../components/AltHeader/AltHeader";
import {Layout} from "../components/Layout"

const About = styled(({className})=>{
  return(
    <Layout>
      <div className={className}>
        <AltHeader title="ABOUT" subTitle="This Page is still under development..." />
      </div>
    </Layout>
  )
})`
  margin-bottom:100px;
  color:${({theme})=>theme.colors.primary};
  h1 {
    text-align:center;
  }
`

export default About;