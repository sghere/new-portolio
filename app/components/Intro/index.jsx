import React from "react";
import styles from "./Intro.module.css";
import { MdWavingHand } from "react-icons/md";
import { BsMouse } from "react-icons/bs";
import commonstyles from "../../common.module.css";
import Image from "next/image";
import myImage from "./sg.png";
import classNames from "classnames";

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
        <MdWavingHand />
      </p>
      <div className={classNames(styles.bullet)}>
        <p>software engineer,</p>
        <p>tech enthusiast,</p>
        <p>MCA graduate from VJTI</p>
      </div>
      <a href="#intro" className={commonstyles.pt1}>
        <BsMouse size={30} />
      </a>
    </div>
  );
};

export default Intro;
