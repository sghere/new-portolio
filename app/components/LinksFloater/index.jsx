import React from "react";
import styles from "./LinksFloater.module.css";
import {
  FaGithub,
  FaHackerrank,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const LinksFloater = () => {
  return (
    <ul className={styles.LinksFloater}>
      <li>
        <a href="https://github.com/sghere">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/sghere/">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://www.hackerrank.com/gshubham8">
          <FaHackerrank />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/mr_sg__/">
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default LinksFloater;
