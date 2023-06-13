import React from "react";
import styles from "./Intro.module.css";
import { FaAngellist } from "react-icons/fa";
import commonstyles from "../../common.module.css";
import Image from "next/image";
import myImage from "./sg.png";

const Intro = () => {
  return (
    <div className={styles.Intro}>
      <div className={styles.MyImage}>
        <Image src={myImage} fill={true} alt="sg" />
      </div>
      <p className={styles.Text}>
        Hello,
        <br /> It&apos;s &nbsp;
        <a href="#">@sghere</a>
        &nbsp;
        <FaAngellist />
      </p>
      <div className={commonstyles.pt2}>
        <p>software engineer,</p>
        <p>tech enthusiast,</p>
        <p>MCA graduate from VJTI</p>
      </div>

      {/* <h1 className={styles.Name}>Shubham Gaikwad</h1>
      <p className={styles.Text}>Full Stack Developer</p>
      <div className={styles.MyImage}>
        <Image src={myimg} alt="myimg" fill={true} />
      </div> */}
    </div>
  );
};

export default Intro;
