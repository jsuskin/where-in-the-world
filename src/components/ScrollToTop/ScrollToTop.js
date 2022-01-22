import { useEffect } from 'react';
import { scrollToTop } from "../../utils/HelperFunctions";
import './styles/ScrollToTop.css';

const ScrollToTop = () => {
  useEffect(() => {
    let curScroll;

    const scrollToTopTab = document.querySelectorAll(".scroll-to-top")[0];

    const checkScroll = () => {
      curScroll = window.scrollY || document.documentElement.scrollTop;

      if (curScroll !== 0) {
        scrollToTopTab.classList.add("show");
      } else {
        scrollToTopTab.classList.remove("show");
      }
    };

    window.addEventListener("scroll", checkScroll);
  }, [])

  return (
    <div className='scroll-to-top' onClick={scrollToTop}>
      <p>Scroll to Top</p>
    </div>
  );
}

export default ScrollToTop
