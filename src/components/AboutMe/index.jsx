import styles from './aboutMe.module.scss';
import CaptionTitleText from '../CaptionTitleText';
import { useNavigate } from 'react-router-dom';
import Goto from '../Goto';
import useIntersectionObserver from '../../hooks/UserIntersectionObserver';

const AboutMe = () => {
  const navigate = useNavigate();
  const [selectTextRef, isSelectTextVisible] = useIntersectionObserver(0.2);
  const [textRef, isTextVisible] = useIntersectionObserver(0.2);
  const [textRef2, isText2Visible] = useIntersectionObserver(0.2);
  const [clientRef, isClientVisible] = useIntersectionObserver(0.2);
  const [clientRef2, isClient2Visible] = useIntersectionObserver(0.2);
  // const [clientRef3, isClient3Visible] = useIntersectionObserver(0.2);

  const handleNavigate = () => {
    navigate('/about');
  };
  return (
    <section className={styles.aboutSection}>
      <div
        ref={selectTextRef}
        className={`${styles.aboutSection__captiontextContainer} ${
          isSelectTextVisible ? styles.aboutSection__animate : ''
        }`}
      >
        <CaptionTitleText data='About <<Me>>' />
      </div>
      <div className={styles.aboutSection__textAchievementContainer}>
        <div className={styles.aboutSection__textContainer}>
          <p
            className={`${styles.aboutSection__text} ${
              isTextVisible ? styles.aboutSection__animate : ''
            }`}
            ref={textRef}
          >
            I&apos;m a front-end developer with a passion for crafting
            pixel-perfect websites. I&apos;ve mastered the art of turning
            caffeine into code and turning ideas into interactive experiences.
          </p>
          <p
            className={`${styles.aboutSection__text} ${
              isText2Visible ? styles.aboutSection__animate : ''
            }`}
            ref={textRef2}
          >
            With a touch of creativity and a dash of JavaScript, I bring designs
            to life and make the web a more beautiful place, one line of code at
            a time.
          </p>
        </div>
        <div>
          <div className={styles.aboutSection__clientContainer}>
            <div
              className={`${styles.aboutSection__client} ${
                isClientVisible ? styles.aboutSection__animate : ''
              }`}
              ref={clientRef}
            >
              <p className={styles.aboutSection__clientNumber}>
                100 <span>%</span>
              </p>
              <p className={styles.aboutSection__clientText}>
                Attention to detail to ensure pixel-perfect designs.
              </p>
            </div>
            <div
              className={`${styles.aboutSection__client} ${
                isClient2Visible ? styles.aboutSection__animate : ''
              }`}
              ref={clientRef2}
            >
              <p className={styles.aboutSection__clientNumber}>
                2000 <span>+</span>
              </p>
              <p className={styles.aboutSection__clientText}>
                Lines of code crafted with passion and precision.
              </p>
            </div>
            <div
              className={`${styles.aboutSection__client} ${
                isClient2Visible ? styles.aboutSection__animate : ''
              }`}
              ref={clientRef2}
            >
              <p className={styles.aboutSection__clientNumber}>
                1000 <span>+</span>
              </p>
              <p className={styles.aboutSection__clientText}>
                Hours spent honing my front-end skills and staying up-to-date
                with the latest technologies.
              </p>
            </div>
          </div>
          <div className={styles.aboutSection__learnMoreContainer}>
            <Goto label='Learn More' onClick={handleNavigate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
