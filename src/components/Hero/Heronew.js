import React, { useEffect, useState } from 'react';
import * as styles from './Hero.module.css';
import Button from '../Button';
import { Link } from 'gatsby';

const Heronew = (props) => {
  const {
    title,
    subtitle,
    ctaText,
    ctaAction,
    image,
    maxWidth,
    ctaStyle,
    ctaLink,
    ctaTo,
    header,
  } = props;

  const [textVisible, setTextVisible] = useState(false);

  // Use useEffect to trigger the text animation on component mount
  useEffect(() => {
    setTextVisible(true);
  }, []);

  return (
    <div className={styles.root} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.content} style={{ maxWidth: maxWidth }}>
        {header && <span className={styles.header}>{header}</span>}
        <div  className={`${styles.titleContainer} ${textVisible ? styles.visible : ''}`}>
        </div>
      
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        {ctaText && (
          <Button
            className={`${styles.ctaButton} ${ctaStyle}`}
            level={'primary'}
            onClick={ctaAction}
          >
            {ctaText}
          </Button>
        )}
        {ctaLink && (
          <Link className={styles.ctaLink} to={ctaTo}>
            {ctaLink}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Heronew;
