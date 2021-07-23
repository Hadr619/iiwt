import { useEffect, useState } from "react";
import Logo from '../svg/Logo';
import styles from './ScrollToTop.module.scss';
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left:0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 50 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true);

      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button className={styles.scrollBtn} onClick={scrollToTop}>
          <Logo className={styles.svg}/>
        </button>
      )}
    </>
  );
}