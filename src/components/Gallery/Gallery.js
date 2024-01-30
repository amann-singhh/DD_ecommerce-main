import React from 'react';
import * as styles from './Gallery.module.css';

const Gallery = (props) => {
  const { images, video } = props;

  const renderGalleryItems = () => {
    const galleryItems = images?.map((imageObject, index) => {
      if (index === 0 && video) {
        // Replace the first image with the video
        return (
          <div key="video" className={styles.videoContainer}>
            <video autoPlay loop muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      } else {
        return (
          <div key={index} className={styles.imageContainer}>
            <img alt={imageObject.alt} src={imageObject.image} />
          </div>
        );
      }
    });

    return galleryItems;
};


  return (
    <div className={styles.root}>
      <div className={styles.cardGrid}>
        {renderGalleryItems()}
      </div>
    </div>
  );
};

export default Gallery;
