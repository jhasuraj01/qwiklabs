import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/cloud-hosting-amico.svg').default,
    description: (
      <>
        Our solutions are well documented and easy to discover required code and solutions.
      </>
    ),
  },
  {
    title: 'Light and Dark Theme',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We support both light and dark theme such that it would be easy for you to follow along which any eye strain.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/video-tutorial.svg').default,
    description: (
      <>
        We know video + documentations makes our life easy! And hence our labs comes along with video tutorial.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
