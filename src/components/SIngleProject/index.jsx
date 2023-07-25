import { useParams } from 'react-router-dom';
import styles from './singleWork.module.scss';
import { projectWorks } from '../../utilities/works';
import CaptionTitleTex from '../CaptionTitleText';
import Work from '../Works/Work';
import Goto from '../Goto';
import useIntersectionObserver from '../../hooks/UserIntersectionObserver';

const SingleWork = () => {
  const [projectRef, isProjectVisible] = useIntersectionObserver(0.3);
  const [techRef, isTechVisible] = useIntersectionObserver(0.3);
  const [imageRef, isImageVisible] = useIntersectionObserver(0.2);
  const [otherWorksRef, isOtherWorksVisible] = useIntersectionObserver(0.3);
  const { projectSlug } = useParams();
  const project =
    projectWorks &&
    projectWorks.find((project) => project.slug === projectSlug);

  return (
    <section className={styles.singleWork}>
      <div className={styles.singleWork__infoContainer}>
        <div className={styles.singleWork__captionTextConatiner}>
          <div
            className={`${styles.singleWork__blueDiamond} ${styles.singleWork__blueDiamond_hidden}`}
          ></div>
          <CaptionTitleTex data={project.projectTitle} smallerText={true} />
          <div className={styles.singleWork__blueDiamond}></div>
        </div>
      </div>
      <div className={styles.singleWork__projectInfoContainer}>
        <div
          ref={projectRef}
          className={`${styles.singleWork__projectHeaderContainer} ${
            isProjectVisible ? styles.singleWork__animate : ''
          }`}
        >
          <h4 className={styles.singleWork__projectInfoHeader}>PROJECT INFO</h4>
          <div className={styles.singleWork__projectInfoText}>
            <p className={styles.singleWork__projectInfoTextContent}>
              {project.about}
            </p>
          </div>
          <div className={styles.singleWork__projectLinkContainer}>
            <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
              <Goto label='visit webpage' smallerText={true} />
            </a>
            <a href={project.gitUrl} target='_blank' rel='noopener noreferrer'>
              <Goto label='Git-Repo' smallerText={true} />
            </a>
          </div>
        </div>
        <div
          className={`${styles.singleWork__technologiesClientContainer} ${
            isTechVisible ? styles.singleWork__animate : ''
          }`}
          ref={techRef}
        >
          <div className={styles.singleWork__technologyContainer}>
            <h4 className={styles.singleWork__technologyHeader}>
              TECHNOLOGIES USED
            </h4>
            <div className={styles.singleWork__technologies}>
              {project &&
                project.technology.map((tech, index) => {
                  return (
                    <p
                      key={index}
                      className={`${styles.singleWork__projectInfoTextContent} ${styles.singleWork__projectInfoTextContent_tech}`}
                    >
                      {tech}
                    </p>
                  );
                })}
            </div>
          </div>
          <div className={styles.singleWork__technologyContainer}>
            <h4 className={styles.singleWork__technologyHeader}>CLIENT</h4>
            <p
              className={`${styles.singleWork__projectInfoTextContent} ${styles.singleWork__projectInfoTextContent_client}`}
            >
              {project.client}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.singleWork__imageContainer} ${
          isImageVisible ? styles.singleWork__animate2 : ''
        } }`}
        ref={imageRef}
      >
        <img
          src={project.desktopImage}
          alt={project.slug}
          className={styles.singleWork__image}
        />
      </div>
      <div className={styles.singleWork__otherWorksContainer}>
        <div
          className={`${styles.singleWork__otherWorksHeaderContainer}  ${
            isOtherWorksVisible ? styles.singleWork__animate : ''
          } `}
          ref={otherWorksRef}
        >
          <CaptionTitleTex data='other <<works>>' smallerText={true} />
        </div>
        <div className={styles.singleWork__otherWorks}>
          {projectWorks &&
            projectWorks
              .filter((work) => work.slug !== projectSlug)
              .slice(0, 2)
              .map((work, index) => {
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
    </section>
  );
};

export default SingleWork;
