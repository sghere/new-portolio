"use client";
import React from "react";
import styles from "./GetInTouch.module.css";
import commonstyles from "../../common.module.css";
import { FaRegHandPointRight } from "react-icons/fa";
import Tippy from "@tippyjs/react";

const GetInTouch = () => {
  return (
    <div id="GetInTouch" className={styles.GetInTouch}>
      <div className={styles.Container}>
        <p>
          get in touch <FaRegHandPointRight /> &nbsp;
        </p>
        <div className={styles.Values}>
          <p>
            <Tippy placement="right" content="Lets Connect!">
              <a href="mailto:shubhamgaikwad.work@gmail.com">
                shubhamgaikwad.work@gmail.com
              </a>
            </Tippy>
          </p>
          <p>
            <Tippy placement="right" content="Lets Talk!">
              <a href="tel:+918655301910"> +91 865-530-1910</a>
            </Tippy>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
