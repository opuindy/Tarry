import Services from '../Services';
import Skills from '../Skills';
import SliderConten from '../SliderContent';
import styles from './aboutMeStyles.module.scss';

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <section className={styles.aboutMe__aboutSection}>
        <div className={styles.aboutMe__imageContainer}></div>
        <div className={styles.aboutMe__infoContainer}>
          <p>
            Hi, I&apos;m Ayebatari Harcourt, a passionate front-end developer
            from Nigeria. I specialize in HTML, CSS, and JavaScript, creating
            captivating and user-friendly web experiences.
            <br />
            <br />
            In addition to the projects showcased here, I have undertaken
            various confidential initiatives that I am unable to present
            publicly. These undertakings highlight my ability to work
            independently and achieve outstanding outcomes. They have played a
            pivotal role in refining my problem-solving skills and deepening my
            comprehension of industry best practices.
            <br />
            <br />
            I continuously update my skills to stay current with the latest web
            technologies and provide innovative solutions.Collaboration and
            continuous improvement are core values to me, fostering strong
            teamwork and a commitment to excellence. I&apos;m eager to leverage
            my skills to create impactful digital experiences.
            <br />
            <br />
            Let&apos;s collaborate and bring your ideas to life!
          </p>
        </div>
      </section>
      <Skills />
      <SliderConten />
      <Services />
    </div>
  );
};

export default AboutMe;
