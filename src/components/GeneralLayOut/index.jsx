import { Outlet } from 'react-router-dom';
import styles from './generalLayOut.module.scss';
import Nav from '../Nav';
import Footer from '../Footer';
import ScrollToTop from '../../hooks/ScrollToTop';

const GeneralLayout = () => {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <main className={styles.main}>
        {' '}
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default GeneralLayout;
