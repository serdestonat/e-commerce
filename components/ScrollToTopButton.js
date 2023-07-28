import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styles from "@/styles/ScrollToTopButton.module.css"; // Create a CSS module for styling

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button className={styles.scrollToTopButton} onClick={scrollToTop}>
      <FaArrowCircleUp />
    </button>
  );
};

export default ScrollToTopButton;
