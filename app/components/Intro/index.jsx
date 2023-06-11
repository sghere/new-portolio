import React from "react";
import styles from "./Intro.module.css";
import myimg from "./myimg.jpg";
import Image from "next/image";

const Intro = () => {
  return (
    <div className={styles.Intro}>
      <p className={styles.Text}>Hello, I&apos;m</p>
      <h1 className={styles.Name}>Shubham Gaikwad</h1>
      <p className={styles.Text}>Full Stack Developer</p>
      <div className={styles.MyImage}>
        <Image src={myimg} alt="myimg" fill={true} />
      </div>
    </div>
  );
};

export default Intro;
