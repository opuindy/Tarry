import styles from './footer.module.scss';
import { NavLink } from 'react-router-dom';
import { links, blogLinks } from '../../utilities/links';
import { FACEBOOK, GITHUB, LINKEDIN, TWITTER } from '../../assets/icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__textContainer}>
          <p className={styles.footer__text}>Would you want to collaborate?</p>
          <NavLink to='contact'>
            {' '}
            <div className={styles.footer__workTextContainer}>
              <h2 className={styles.footer__workText}>
                Let&apos;s <span>Work Together</span>!
              </h2>
              <h2
                className={`${styles.footer__workText} ${styles.footer__blueWorkText}`}
              >
                Let&apos;s Work Together!
              </h2>
            </div>
          </NavLink>
        </div>
        <div className={styles.footer__footerContainer}>
          {' '}
          <div className={styles.footer__logo_social_link_container}>
            <div className={styles.footer__logo}>
              <h3 className={styles.footer__logoName}>Ayebatari Harcourt</h3>
            </div>
            <div>
              <div className={styles.footer__socialLinksContainer}>
                <p className={styles.footer__socialLinksText}>follow me:</p>
                <div className={styles.footer__socialLink}>
                  <img src={FACEBOOK} alt='facebook' />
                </div>
                <div className={styles.footer__socialLink}>
                  <a
                    href='https://twitter.com/Tarry_Harcourt'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={TWITTER} alt='twitter' />
                  </a>
                </div>
                <div className={styles.footer__socialLink}>
                  <a
                    href='https://www.linkedin.com/in/ayebatari-harcourt-21630b21a/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={LINKEDIN} alt='linkedIn' />
                  </a>
                </div>
                <div className={styles.footer__socialLink}>
                  <a
                    href='https://github.com/opuindy'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={GITHUB} alt='git-hub' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer__pagesContainer}>
            <p className={styles.footer__pages}>Pages</p>
            <ul className={styles.footer__linkContainer}>
              {links.map((linkItem) => {
                const { id, name, link } = linkItem;
                return (
                  <NavLink to={link} key={id}>
                    <li>{name}</li>
                  </NavLink>
                );
              })}
            </ul>
          </div>
          <div className={styles.footer__pagesContainer}>
            <p className={styles.footer__pages}>CMS</p>
            <ul className={styles.footer__linkContainer}>
              {blogLinks.map((linkItem) => {
                const { id, name, link } = linkItem;
                return (
                  <NavLink to={link} key={id}>
                    <li>{name}</li>
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <p>
          &copy; {new Date().getFullYear()} <span>Ayebatari Harcourt </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
