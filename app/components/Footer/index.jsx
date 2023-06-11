import React from "react";
import styles from "./Footer.module.css";
import { FaBeer } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const FooterLink = ({ href, Icon }) => {
  return <a href={href}>{Icon}</a>;
};

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <FooterLink href="#" Icon={<RxAvatar size={25} />} />
      <FooterLink href="#" Icon={<RxAvatar size={25} />} />
      <FooterLink href="#" Icon={<RxAvatar size={25} />} />
      <FooterLink href="#" Icon={<RxAvatar size={25} />} />
      <FooterLink href="#" Icon={<RxAvatar size={25} />} />
    </div>
  );
};

export default Footer;
