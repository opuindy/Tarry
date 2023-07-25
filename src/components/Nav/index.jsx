import { useState, useEffect, useRef } from 'react';
import styles from './nav.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { links } from '../../utilities/links';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo_hamburger_Container}>
          <div
            className={styles.header__logoContainer}
            onClick={handleNavigate}
          >
            Ayebatari harcourt
          </div>
          <div
            className={styles.header__hamburger}
            onClick={() => setShowLinks(!showLinks)}
          >
            <span
              className={
                showLinks
                  ? `${styles.header__hamburger_button} ${styles.header__hamburger_button_open}`
                  : `${styles.header__hamburger_button}`
              }
            ></span>
          </div>
        </div>

        <nav className={styles.header__nav}>
          <div
            className={styles.header__navList_container}
            ref={linksContainerRef}
          >
            <ul className={styles.header__navList} ref={linksRef}>
              {links.map((singleLink) => {
                const { id, link, name } = singleLink;
                return (
                  <NavLink
                    to={link}
                    key={id}
                    className={styles.header__nav_link}
                    onClick={() => setShowLinks(false)}
                  >
                    <li className={styles.header__singleList}>{name}</li>
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
