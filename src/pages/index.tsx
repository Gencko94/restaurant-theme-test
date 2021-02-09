import React from "react";
import Layout from "@/Layout/Layout";

import styles from "@/styles/Home.module.scss";
import Hero from "@/components/Home/Hero/Hero";
import Categories from "@/components/Home/Categories/Categories";

export default function Home() {
  // const { inView, ref } = useInView({ threshold: 0.5 });
  return (
    <Layout>
      <Hero />
      <div className={styles.contentContainer}>
        <Categories />
      </div>
    </Layout>
  );
}
