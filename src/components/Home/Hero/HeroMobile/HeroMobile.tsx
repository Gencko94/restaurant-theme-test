import React from "react";
import ContentLoader from "react-content-loader";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./HeroMobile.module.scss";

SwiperCore.use([Navigation, Pagination]);

const HeroMobile = () => (
  <div className={styles.container}>
    <Swiper draggable="false" navigation={false} slidesPerView={1}>
      <SwiperSlide draggable="false">
        <div className={styles.imageContainer}>
          <img src="/images/bg.jpg" alt="hero" className={styles.heroImage} />

          <ContentLoader viewBox="0 0 1440 400">
            <rect x="0" y="0" rx="0" ry="0" width="1440" height="400" />
          </ContentLoader>
        </div>
      </SwiperSlide>
    </Swiper>

    <div className={styles.logoContainer}>
      <img className={styles.logo} src="images/logo.png" alt="logo" />
    </div>
  </div>
);

export default HeroMobile;
