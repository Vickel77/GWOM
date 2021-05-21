import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";
import Menu from '../Menu';
import Button from "../Button";
import useScroll from "../../hooks/useScroll";

const Nav = styled(({className, hideNav}) =>{

  return(
    <div className={className}>
      <div className="cancel" onClick={hideNav}>X</div>
      <div className="nav">
        <div className="nav-item">
          <Link href="/about">
            ABOUT
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/blog">
            BLOG
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/partner">
            PARTNER WITH US
          </Link>
        </div>
      </div>
    </div>
  )
})`
height:100vh;
width:18%;
background:rgba(255,255,255,.5);
position:absolute;
right:0;
top:0;
z-index:500;
padding-top:100px;
color:white;
animation: animate-nav 1s ;
transform-origin:100%;
&:before {
  content:"";
  position:absolute;
  right:0;
  top:0;
  height:100vh;
  width:98%;
  background:${({theme})=>theme.colors.primary};
  z-index:-111;
  transform-origin:100%;
  animation:animate-nav 1.3s;
}
@keyframes animate-nav {
  from{transform:scale(0,1)}
  to{transform:scale(1)}
}
.cancel {
  position:absolute;
  right:30px;
  top:15px;
  font-size:1.3em;
}
.cancel:hover {
  transition:.3s;
  opacity:.5;
  cursor:pointer;
}
.nav{
  height:25vh;
  width:100%;
  display:flex;
  flex-flow:column wrap;
  align-items:center;
  justify-content:space-around;
  animation:animate-navcontent 1.5s;
}
@keyframes animate-navcontent {
  from,50%{opacity:0;}
  to{opacity:1;}
}
.nav-item a, .nav-item a:visited, .nav-item a:hover  {
  color:${({theme})=>theme.colors.white};
  
}
.nav-item:hover {
  transition:.2s;
  opacity:.5;
  position:relative
}

@media (max-width:600px){
  width:100%;
  &:before {
    width:100%;
  }
}
`

const NavBar = styled(({className}) => {
  const [showNav, setShowNav] = useState(false)
  const {scrolled, handleScroll} = useScroll();
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  })
  return(
    <nav className={className}>
      <div className={`navigation ${scrolled && "scrolled"}`}>
        <div className="logo">
          <Link href="/">
            {!scrolled ? 
              <img src="./logo.png" alt="logo-img" />:
              <img src="./logo-white.png" alt="logo-img" />}
          </Link>
        </div>
        <div className="buttons">
          <Button white label="DONATE"/>
          <Menu onClick={()=>setShowNav(!showNav)} />
        </div>
        {showNav && <Nav hideNav={()=>setShowNav(false)} />}
      </div>
    </nav>
  )
})`
  .navigation {
    z-index:111111;
    position:absolute;
    top:0;
    height:60px;
    width:100vw;
    display:flex;
    justify-content:space-between;
    padding:0 60px;
    align-items:center;
    color: ${({theme})=>theme.colors.white};
  }
.scrolled {
  position:fixed;
  background:#7B03A3aa;
  animation:animate-nav .3s;
}
@keyframes animate-nav {
  from{transform: translateY(-20px); opacity:0;}
  to{transform: translateY(0px); opacity:1;}
} 
.buttons {
  width:200px;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

@media (max-width:600px){
  .navigation {
    padding:0 10px;
  }
  .navigation * {  transform:scale(.9);}
  .buttons {
    width:150px;
  }
  .scrolled {
    height:40px;
  }
}
`

export default NavBar;