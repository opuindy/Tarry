import styles from './sliderContentStyles.module.scss';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import { data } from '../../utilities/skills';
import useIntersectionObserver from '../../hooks/UserIntersectionObserver';

const SliderConten = () => {
  const [sliderRef, isSliderVisible] = useIntersectionObserver(0.2);
  const responsive = {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    920: { items: 4 },
    1024: {
      items: 5,
    },
  };
  return (
    <section
      ref={sliderRef}
      className={`${styles.sliderContent} ${
        isSliderVisible ? styles.sliderContent__animate : ''
      }`}
    >
      <article className={styles.sliderContent__slideItemsWrapper}>
        <AliceCarousel
          duration={500}
          autoPlay={true}
          startIndex={0}
          mouseDragEnabled={true}
          disableDotsControls={true}
          keyboardNavigation={true}
          responsive={responsive}
          mouseTracking
          animationEasingFunction='linear'
          animationType='linear'
          animationDuration={1500}
          autoPlayInterval={0}
          autoPlayDirection='ltr'
          autoPlayActionDisabled={true}
          disableButtonsControls={true}
          freezable={false}
          infinite={true}
        >
          {data.map((item, index) => {
            const { img, text } = item;
            return (
              <div className={styles.sliderContent__slideItems} key={index}>
                <img
                  src={img}
                  alt={`${text} icon`}
                  className={`${styles.sliderContent__Icon} ${
                    styles[text.toLowerCase()]
                  }`}
                />
                <p>{text}</p>
              </div>
            );
          })}
        </AliceCarousel>
      </article>
    </section>
  );
};

export default SliderConten;
