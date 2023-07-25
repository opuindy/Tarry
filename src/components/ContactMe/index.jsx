import styles from './contactMeStyles.module.scss';
import CaptionTitleText from '../CaptionTitleText';
import Form from './Form';
import { FACEBOOK, GITHUB, LINKEDIN, TWITTER } from '../../assets/icons';

const ContactMe = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__titleContainer}>
        <div className={styles.contact__titleHeaderContainer}>
          <div className={styles.contact__titleHeader}>
            <CaptionTitleText data="Let's <<talk>>" />
          </div>
        </div>
        <p className={styles.contact__text}>
          Hello there! I&apos;m thrilled that you&apos;ve stopped by. As a
          passionate front-end web developer, I&apos;m always excited to meet
          new people and collaborate on exciting projects. Let&apos;s create
          something amazing together!
        </p>
      </div>
      <div className={styles.contact__contactInfoContainer}>
        <div className={styles.contact__contactContentContainer}>
          <div className={styles.contact__contactContent}>
            <h4 className={styles.contact__contactContentTitle}>Email</h4>
            <p>opuindy@gmail.com</p>
          </div>
          <div className={styles.contact__contactContent}>
            <h4 className={styles.contact__contactContentTitle}>Contact</h4>
            <div className={styles.contact__contactSocialsContainer}>
              <a
                href=''
                target='_blank'
                rel='noopener noreferrer'
                className={styles.contact__socialLink}
              >
                <img src={FACEBOOK} alt='facebook' />
              </a>
              <a
                href='https://twitter.com/Tarry_Harcourt'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.contact__socialLink}
              >
                <img src={TWITTER} alt='twitter' />
              </a>
              <a
                href='https://www.linkedin.com/in/ayebatari-harcourt-21630b21a/'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.contact__socialLink}
              >
                <img src={LINKEDIN} alt='linked-in' />
              </a>
              <a
                href='https://github.com/opuindy'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.contact__socialLink}
              >
                <img src={GITHUB} alt='git-hub' />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contact__formContainer}>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
