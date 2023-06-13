import React from "react";
import styles from "./TechStack.module.css";
import commonstyles from "../../common.module.css";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbSql, TbBrandJavascript, TbBrandCSharp } from "react-icons/tb";
import classNames from "classnames";

const TechStack = () => {
  return (
    <div className={classNames(commonstyles.pt2, styles.TechStack)}>
      <p className={commonstyles.Heading}>stack</p>
      <ul>
        <li>
          <FaReact title="React" />
        </li>
        <li>
          <FaNodeJs />
        </li>
        <li>
          <TbSql />
        </li>
        <li>
          <FaHtml5 />
        </li>
        <li>
          <FaCss3 />
        </li>
        <li>
          <TbBrandJavascript />
        </li>
        <li>
          <SiMongodb />
        </li>
        <li>
          <TbBrandCSharp />
        </li>
      </ul>
    </div>
  );
};

export default TechStack;
