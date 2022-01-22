import { useEffect } from 'react';
import ThemeToggle from "./ThemeToggle";
import './styles/Header.css';

const Header = ({ reset }) => {
  useEffect(() => {
    let prevScroll = window.scrollY || document.documentElement.scrollTop;
    let curScroll;
    let direction = 0;
    let prevDirection = 0;

    const header = document.getElementsByTagName("header")[0];

    const checkScroll = function () {
      /*
       ** Find the direction of scroll
       ** 0 - initial, 1 - up, 2 - down
       */

      curScroll = window.scrollY || document.documentElement.scrollTop;
      if (curScroll > prevScroll) {
        // scrolled up
        direction = 2;
      } else if (curScroll < prevScroll) {
        // scrolled down
        direction = 1;
      }

      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }

      prevScroll = curScroll;
    };

    const toggleHeader = function (direction, curScroll) {
      if (direction === 2 && curScroll > 52) {
        // replace 52 with the height of your header in px

        header.classList.add("hide");
        prevDirection = direction;
      } else if (direction === 1) {
        header.classList.remove("hide");
        prevDirection = direction;
      }
    };

    window.addEventListener("scroll", checkScroll);
  }, []);
  
  return (
    <header>
      <h3 className='app-title' onClick={reset}>
        Where in the world?
      </h3>
      <ThemeToggle />
    </header>
  );
}

export default Header
