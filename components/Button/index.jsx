import styled from "styled-components";

const Button = styled(({className, label}) => {
  return(<button className={className}>
          {label}
        </button>)
})`
  background: ${({theme})=> theme.colors.primary};
  color: ${({theme})=> theme.colors.white};
  outline:none;
  border:none;
  border-radius: 15px 0;
  padding:10px 20px;
  box-shadow:1px 2px 2px rgba(0,0,0,.1);
  transition:.3s;
  &:hover {
    background: ${({theme})=>theme.colors.white};
    color: ${({theme})=>theme.colors.primary};
    cursor:pointer;
  }
  ${(props)=> props.white &&`
    background: white;
    color: #7B03A3;
    &:hover {
      background: #7B03A3;
      color: white;
    }
  `}

  ${(props)=> props.outline &&`
    background: transparent;
    border: 1px solid #7B03A3;
    color: #7B03A3;
    &:hover {
      border: 1px solid #7B03A3;
      background: #7B03A3;
      color: white;
    }
  `}


`

export default Button;