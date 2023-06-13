"use client";

import React from "react";
import styles from "./TechStack.module.css";
import commonstyles from "../../common.module.css";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbSql, TbBrandJavascript, TbBrandCSharp } from "react-icons/tb";
import classNames from "classnames";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Image from "next/image";

//imoprting images
import mahalaxmisanitary from "./projectimages/mahalaxmisanitary.png";
import Portfolio1 from "./projectimages/Portfolio1.png";
import shubhamantiques from "./projectimages/shubhamantiques.png";
import trackmoney from "./projectimages/trackmoney.png";
import subproperty from "./projectimages/subproperty.png";
import whatsappdm from "./projectimages/whatsappdm.png";
import bytectrl from "./projectimages/bytectrl.png";
import isactive from "./projectimages/isactive.png";

const projects = [
  {
    name: "Shubham Antiques Shop",
    link: "https://shubhamantiques.shop/",
    image: shubhamantiques,
  },
  {
    name: "Portfolio2",
    link: "https://shubhamgaikwad.bytectrl.tech/",
  },
  {
    name: "Portfolio",
    link: "https://shubhamgaikwad.bytectrl.tech/",
    image: Portfolio1,
  },
  {
    name: "trackmoney",
    link: "https://trackmoneyapp.netlify.app/",
    image: trackmoney,
  },
  {
    name: "whatsappdm",
    link: "https://whatsappdm.bytectrl.tech/",
    image: whatsappdm,
  },
  {
    name: "Mahalaxmi Sanitary",
    link: "http://mahalaxmisanitary.com/",
    image: mahalaxmisanitary,
  },
  {
    name: "ByteCtrl",
    link: "https://bytectrl.tech/",
    image: bytectrl,
  },
  {
    name: "Sub Property Consultancy",
    link: "http://subproperty.in/",
    image: subproperty,
  },
];

const projectsrenderer = projects.map((project) => {
  return (
    <li key={project.name}>
      <Tippy
        placement="right"
        arrow={false}
        animation="scale"
        content={
          <div className={styles.ProjectImage}>
            <Image src={project.image} fill alt="sg" />
          </div>
        }
      >
        <a href={project.link}>{project.name}</a>
      </Tippy>
    </li>
  );
});

const TechStack = ({ Type = "techstack" }) => {
  return (
    <div id={Type} className={classNames(commonstyles.pt2, styles.TechStack)}>
      <p className={commonstyles.Heading}>{Type}</p>
      {
        {
          intro: (
            <div className={styles.Introduction}>
              <br />
              <blockquote>
                <i>
                  <p>
                    Hi, I&apos;m Shubham Mahesh Gaikwad, an MCA graduate and
                    React developer.
                  </p>
                  <p>
                    With a strong passion for frontend development, I specialize
                    in creating dynamic and intuitive user interfaces.
                  </p>
                  <p>
                    As a problem solver, I strive to deliver innovative
                    solutions that enhance user experiences and drive business
                    growth.
                  </p>
                  <p>
                    I am naturally persevered, self-confident, quietly curios,
                    innovative and constantly challenging my skills.
                  </p>
                  <p>Let&apos;s build amazing web applications together!</p>
                </i>
              </blockquote>
            </div>
          ),
          techstack: (
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
          ),
          "opensource / contributions": (
            <div className={styles.OpenSource}>
              <ul>
                <li>
                  <Tippy
                    placement="right"
                    arrow={false}
                    animation="scale"
                    content={
                      <div className={styles.ProjectImage}>
                        <Image src={isactive} fill alt="sg" />
                      </div>
                    }
                  >
                    <a href="https://www.npmjs.com/package/@sghere/is-active">
                      @sghere/is-active
                    </a>
                  </Tippy>
                </li>
              </ul>
            </div>
          ),
          projects: (
            <div className={styles.Projects}>
              <ul>{projectsrenderer}</ul>
            </div>
          ),
        }[Type]
      }
    </div>
  );
};

export default TechStack;
