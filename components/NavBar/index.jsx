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
        <div className="nav-item" onClick={hideNav}>
          <Link href="/">
            HOME
          </Link>
        </div>
        <div className="nav-item" onClick={hideNav}>
          <Link href="/about">
            ABOUT
          </Link>
        </div>
        <div className="nav-item" onClick={hideNav}>
          <Link href="/blog">
            BLOG
          </Link>
        </div>
        <div className="nav-item" onClick={hideNav}>
          <Link href="/partner">
            PARTNER WITH US
          </Link>
        </div>
        <Link href="/donate" onClick={hideNav}>
          <a>
            <Button white label="MAKE A DONATION" />
          </a>
        </Link>
      </div>
    </div>
  )
})`
height:100vh;
width:18%;
background:rgba(255,255,255,.5);
position:fixed;
right:0;
top:0;
z-index:500;
padding-top:100px;
color:white;
animation: animate-nav .65s ;
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
  animation:animate-nav .75s;
}
@keyframes animate-nav {
  from{transform:scale(0,1)}
  to{transform:scale(1)}
}
.cancel {
  position:absolute;
  right:20px;
  top:20px;
  font-size:1.3em;
}
.cancel:hover {
  transition:.3s;
  opacity:.5;
  cursor:pointer;
}
.nav{
  height:40vh;
  display:flex;
  flex-flow:column wrap;
  align-items:center;
  justify-content:space-around;
  
}
.nav-item {
  animation:animate-navcontent .8s;
  width:70%;
  padding:10px 0;
  text-align:center;
}
.nav-item:hover {
  transition:.3s;
  cursor:pointer;
  opacity:.5;
}


.nav-item:nth-child(2) {
  animation:animate-navcontent 1s;
}
.nav-item:nth-child(3) {
  animation:animate-navcontent 1.2s;
}
.nav-item:nth-child(4) {
  animation:animate-navcontent 1.4s;
}
@keyframes animate-navcontent {
  from,50%{opacity:0;}
  to{opacity:1;}
}
.nav-item a, .nav-item a:visited, .nav-item a:hover  {
  color:${({theme})=>theme.colors.white};
  
}

@media (max-width:600px){
  width:100%;
  background: rgba(255,255,255,1);
  &:before {width:95%;}
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
              <img src="../logo.png" alt="logo-img" />:
              <img src="../logo-white.png" alt="logo-img" />}
          </Link>
        </div>
        <div className="logo-m">
          <Link href="/">
            <img src="../logo-white.png" alt="logo-img" />
          </Link>
        </div>
        <div className="buttons">
          <Link href="/donate">
            <a>
              <Button white label="DONATE"/>
            </a>
          </Link>
          <Menu onClick={()=>setShowNav(!showNav)} />
        </div>
        {showNav && <Nav hideNav={()=>setShowNav(false)} />}
      </div>
    </nav>
  )
})`
  .navigation {
    z-index:111111;
    position:fixed;
    top:0;
    height:60px;
    width:100vw;
    display:flex;
    justify-content:space-between;
    padding:0 60px;
    align-items:center;
    color: ${({theme})=>theme.colors.white};
  }
  .logo{
    display:block;
  }
  .logo:hover {
    cursor:pointer;
  }
  .logo-m {
    display:none;
  }
.scrolled {
  background:${({theme})=>theme.colors.primary};
  animation:animate-scrolled-nav .3s;
  box-shadow:0 2px 5px rgba(0,0,0,.3);
}
@keyframes animate-scrolled-nav {
  from{background:transparent;}
  to{background:${({theme})=>theme.colors.primary};}
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
  .logo{
    display:none;
  }
  .logo-m {
    display:block;
  }
  .navigation .logo, .navigation .buttons {  
    transform:scale(.9);
    padding-top:5px;
  }
  .buttons {
    width:150px;
  }
}
`

export default NavBar;