import CaptionTitleTex from '../CaptionTitleText';
import SingleService from '../SingleService';
import styles from './servicesStyle.module.scss';

const Services = () => {
  return (
    <section className={styles.services}>
      <div>
        <CaptionTitleTex data='Variety Of <<Services>>' />
      </div>
      <SingleService />
    </section>
  );
};

export default Services;
