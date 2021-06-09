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
    color: ${({theme})=>theme.colors.primaryText};
    cursor:pointer;
  }
  ${({white, theme})=> white &&`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryText};
    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `}

  ${({outline, theme})=> outline &&`
    background: transparent;
    border: 1px solid ${theme.colors.primaryText};
    color: ${theme.colors.primaryText};
    &:hover {
      border: 1px solid ${theme.colors.white};
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `}

  ${({outlineWhite, theme})=> outlineWhite &&`
    background: transparent;
    border: 1px solid ${theme.colors.white};
    color: ${theme.colors.white};
    &:hover {
      border: 1px solid ${theme.colors.white};
      background: ${theme.colors.white};
      color: ${theme.colors.primaryText};
    }
  `}


`

export default Button;