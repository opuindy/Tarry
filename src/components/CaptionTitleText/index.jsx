import styles from './captionTitleText.module.scss';

// eslint-disable-next-line react/prop-types
const CaptionTitleTex = ({ data, smallerText }) => {
  // eslint-disable-next-line react/prop-types
  const newData = data.split('<<').join('<span>').split('>>').join('</span>');

  function createMarkup() {
    return {
      __html: `<h2 class=${smallerText && styles.centerText}>${newData}</h2>`,
    };
  }

  return (
    <div
      className={`${styles.div} ${smallerText && styles.smallText}`}
      dangerouslySetInnerHTML={createMarkup()}
    />
  );
};

export default CaptionTitleTex;
