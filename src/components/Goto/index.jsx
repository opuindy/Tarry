import styles from './gotoStyles.module.scss';

const Goto = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={styles.gotoButton} onClick={props.onClick}>
      <h1
        className={`${styles.gotoButton__topText} ${
          props.smallerText && styles.gotoButton__topText_smallerText
        }`}
      >
        {props.label}
      </h1>
      <h1
        className={`${styles.gotoButton__bottomText} ${
          props.smallerText && styles.gotoButton__bottomText_smallerText
        }`}
      >
        {props.label}
      </h1>
    </div>
  );
};

export default Goto;
