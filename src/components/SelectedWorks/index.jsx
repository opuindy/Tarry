import { useEffect, useRef, useState } from 'react';
import styles from './selectedWorks.module.scss';
import { useNavigate } from 'react-router-dom';
import { projectWorks } from '../../utilities/works';
import CaptionTitleText from '../CaptionTitleText';
import Goto from '../Goto';
import useIntersectionObserver from '../../hooks/UserIntersectionObserver';
import Work from '../Works/Work';

const SelectedWorks = () => {
  const navigate = useNavigate();
  const [containerRef, isContainerVisible] = useIntersectionObserver();
  const [selectTextRef, isSelectTextVisible] = useIntersectionObserver(0.9);
  const [isAnimated, setIsAnimated] = useState(false);
  const workCardsRef = useRef([]);

  const handleClick = () => {
    navigate('/work');
  };

  useEffect(() => {
    if (isContainerVisible && !isAnimated) {
      setIsAnimated(true);
      animateWorkCards();
    }
  }, [isContainerVisible, isAnimated]);

  const animateWorkCards = () => {
    workCardsRef.current.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.5}s`;
      card.classList.add(styles.selectedWorksSection__animate);
    });
  };

  return (
    <section className={styles.selectedWorksSection} ref={containerRef}>
      <div
        className={`${styles.selectedWorksSection__selectText} ${
          isSelectTextVisible ? styles.selectedWorksSection__animate : ''
        }`}
        ref={selectTextRef}
      >
        <div>
          <CaptionTitleText data='selected &lt;&lt;Works&gt;&gt;' />
        </div>
        <Goto label='view all' onClick={handleClick} />
      </div>
      <div className={styles.selectedWorksSection__worksContainer}>
        {projectWorks &&
          projectWorks.slice(0, 3).map((work, index) => {
            const { id, projectTitle, slug, desktopImage } = work;
            return (
              <Work
                key={id}
                projectTitle={projectTitle}
                slug={slug}
                desktopImage={desktopImage}
                delay={index * 1.5}
              />
            );
          })}
      </div>
    </section>
  );
};

export default SelectedWorks;
