import styles from './skillsStyles.module.scss';
import CaptionTitleText from '../CaptionTitleText';
import useIntersectionObserver from '../../hooks/UserIntersectionObserver';

const Skills = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver(0.4);
  const [textRef, isTextVisible] = useIntersectionObserver(0.4);
  return (
    <section className={styles.skills}>
      <div
        ref={titleRef}
        className={`${styles.skills__captionContainer} ${
          isTitleVisible ? styles.skills__animate : ''
        }`}
      >
        <CaptionTitleText data='tech <<stack>>' />
      </div>
      <div
        ref={textRef}
        className={`${styles.skills__techContainer} ${
          isTextVisible ? styles.skills__animate : ''
        }`}
      >
        <p className={styles.skills__techText}>
          With expertise in <span>HTML</span>, <span>CSS</span>,{' '}
          <span>JavaScript</span>, <span>React</span>, and <span>Redux</span>, I
          bring a passion for front-end web development. I am skilled in
          crafting responsive and user-friendly web interfaces. My toolset also
          includes <span>SASS</span> and <span>Styled Components</span> for
          efficient and scalable styling. I continuously explore new
          technologies and stay updated with the latest trends to deliver
          innovative and impactful solutions.
        </p>
      </div>
    </section>
  );
};

export default Skills;
