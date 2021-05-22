import styled from "styled-components";
import {Layout} from "../components/Layout"

const Partner = styled(({className})=>{
  return(
    <Layout>
      <div className={className}>
        <h1> Partner Page...</h1>
      </div>
    </Layout>
  )
})`
margin:100px 0;
color:${({theme})=>theme.colors.primary};
h1 {
  text-align:center;
}
`

export default Partner;