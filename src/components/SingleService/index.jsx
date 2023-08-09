// import CaptionTitleTex from '../CaptionTitleText';
import styles from './singleServiceStyles.module.scss';

const SingleService = () => {
  return (
    <article className={styles.service}>
      <div className={styles.service__titleContainer2}>
        <div className={styles.service__imageContainer}></div>
        <div className={styles.service__title}>
          <h3>Frontend web Development</h3>
        </div>
      </div>

      <div className={styles.service__serviceCard}>
        <p className={styles.service__serviceText}>
          <span>&#9889;</span>{' '}
          <span>
            Building responsive Single-Page-Apps (SPA) & PWA in React.js.{' '}
          </span>
        </p>
        <p className={styles.service__serviceText}>
          <span>&#9889;</span>
          <span>Responsive web development .</span>
        </p>
        <p className={styles.service__serviceText}>
          <span>&#9889; </span>
          <span>Optimize applications for maximum speed. </span>
        </p>
      </div>
    </article>
  );
};

export default SingleService;
