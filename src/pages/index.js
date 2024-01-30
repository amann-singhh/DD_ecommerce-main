import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import Heronew from '../components/Hero/Heronew';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <div className={`heroContainer ${styles.heroContainer}`}>
    <Hero
        image={'/tittlebannerbgwithouttext.jpg'}
        ctaAction={goToShop}
    />
</div>

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <h3>
          Wear Your
          <span className={styles.gold}> Wibe</span>
        </h3>
      
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'New Collection'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'New Arrivals'} link={'/shopmen'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Luxury Knitwear'}
            description={`This soft lambswool jumper is knitted in Scotland, using yarn from one of the world's oldest spinners based in Fife`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Heronew image={'/tittlebanner.jpg'} title={`-50% off \n All Essentials`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>WOMAN</Link>
          <Link to={'/shopmen'}>MAN</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-black)'}
        title={'about BEFORM'}
        quote={
          '“Design that Echo, Quality that Resonates . Beform - Your Signature in Style”'
        }
      />

      {/* Blog Grid */}
      {/* <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Journal'} subtitle={'Notes on life and style'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div> */}

      {/* Promotion */}
      {/* <div className={styles.sustainableContainer}>
        <Hero
          image={'/banner3.png'}
          title={'We are Sustainable'}
          subtitle={
            'From caring for our land to supporting our people, discover the steps we’re taking to do more for the world around us.'
          }
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div> */}

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Designed for You'}
          subtitle={'Tag @BEFORM to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <div className={styles.imageContainer}>
            <img src={`/post 4.jpg`} alt={'social media 1'} />
            <a
              href="https://www.instagram.com/your-instagram-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.instagramIcon} instagram-icon`}
            >
              {/* Replace 'path-to-instagram-icon.svg' with your actual Instagram icon URL */}
              <img
                src="instagram.svg"
                alt="Instagram Icon"
                className={styles.instagramIconImage}
              />
            </a>
          </div>
          <div className={styles.imageContainer}>
            <img src={`/post 5.jpg`} alt={'social media 1'} />
            <a
              href="https://www.instagram.com/your-instagram-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.instagramIcon} instagram-icon`}
            >
              {/* Replace 'path-to-instagram-icon.svg' with your actual Instagram icon URL */}
              <img
                src="instagram.svg"
                alt="Instagram Icon"
                className={styles.instagramIconImage}
              />
            </a>
          </div>
          <div className={styles.imageContainer}>
            <img src={`/post 6.jpg`} alt={'social media 1'} />
            <a
              href="https://www.instagram.com/your-instagram-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.instagramIcon} instagram-icon`}
            >
              {/* Replace 'path-to-instagram-icon.svg' with your actual Instagram icon URL */}
              <img
                src="instagram.svg"
                alt="Instagram Icon"
                className={styles.instagramIconImage}
              />
            </a>
          </div>
          <div className={styles.imageContainer}>
            <img src={`/post 6.jpg`} alt={'social media 1'} />
            <a
              href="https://www.instagram.com/your-instagram-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.instagramIcon} instagram-icon`}
            >
              {/* Replace 'path-to-instagram-icon.svg' with your actual Instagram icon URL */}
              <img
                src="instagram.svg"
                alt="Instagram Icon"
                className={styles.instagramIconImage}
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
