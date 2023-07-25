import { useRef, useEffect } from 'react';
import { useState } from 'react';
import styles from './bannerSyles.module.scss';

const Banner = () => {
  const [visible, setVisible] = useState(false);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Adjust this threshold as per your needs
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);

    if (textContainerRef.current) {
      observer.observe(textContainerRef.current);
    }

    return () => {
      if (textContainerRef.current) {
        observer.unobserve(textContainerRef.current);
      }
    };
  }, [visible]);

  return (
    <section className={styles.banner}>
      <div className={styles.banner__textContainer} ref={textContainerRef}>
        <div className={`${styles.banner__text} ${styles.visible}`}>
          <h1 className={styles.banner__name}>Ayebatari Harcourt</h1>
        </div>
      </div>
      <div className={styles.banner__imageContainer}>
        <div className={styles.banner__image}>
          <div
            className={`${styles.banner__textTitleContainer} ${
              styles[visible.toString()]
            }`}
          >
            <h3>Web Developer</h3>
          </div>
          <div
            className={`${styles.banner__textTitleContainer} ${
              styles[visible.toString()]
            }`}
          >
            <h3>Based in Lagos, Nigeria</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
