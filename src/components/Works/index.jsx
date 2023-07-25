import styles from './works.module.scss';
import CaptionTitleTex from '../CaptionTitleText';
import Work from './Work';
import { projectWorks } from '../../utilities/works';

const Works = () => {
  return (
    <div className={styles.worksContainer}>
      <div className={styles.worksContainer__captionContainer}>
        <div className={styles.worksContainer__textContainer}>
          <div>
            <CaptionTitleTex data='My &lt;&lt;Work&gt;&gt;' />
          </div>

          <p>These are my recent projects</p>
        </div>
      </div>

      <div className={styles.worksContainer__workCardContainer}>
        {' '}
        {projectWorks &&
          projectWorks.map((work, index) => {
            const { id, projectTitle, slug, desktopImage } = work;
            return (
              <Work
                key={id}
                projectTitle={projectTitle}
                slug={slug}
                desktopImage={desktopImage}
                delay={index * 1.5}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Works;
