import { useState } from "react";
const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 80 ? setScrolled(true) : setScrolled(false);
  }
  return {
    scrolled,
    handleScroll
  }
}

export default useScroll;