import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './work.module.scss';
import useIntersectionObserver from '../../../hooks/UserIntersectionObserver';

const Work = (props) => {
  const [containerRef, isContainerVisible] = useIntersectionObserver(0.3);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isContainerVisible && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isContainerVisible, isAnimated]);

  return (
    <NavLink to={`/work/${props.slug}`} className={styles.link}>
      <article
        className={`${styles.workCard} ${
          isAnimated ? styles.workCard__animate : ''
        }`}
        style={{
          backgroundImage: `linear-gradient(
          to top right,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0.1) 50%,
          rgba(0, 0, 0, 0.6) 100%
        ), url(${props.desktopImage})`,
          transitionDelay: `${props.delay}ms`,
        }}
        ref={containerRef}
      >
        <h3 className={styles.workCard__workCardText}>{props.projectTitle}</h3>
        <div className={styles.workCard__arrowUPContainer}>
          <div
            className={`${styles.workCard__arrowUP} ${styles.workCard__moveDown}`}
          >
            <span> &#8599;</span>
          </div>
          <div
            className={`${styles.workCard__arrowUP} ${styles.workCard__moveUp}`}
          >
            <span> &#8599;</span>
          </div>
        </div>
      </article>
    </NavLink>
  );
};

export default Work;
