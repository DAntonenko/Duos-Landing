import { FC } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
// import Button from '@/components/Button/Button';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links}>
        <Link
          className={styles.link}
          href='#'
        >
          Contact Us
        </Link>
        <Link
          className={styles.link}
          href='#'
        >
          Privacy Policy
        </Link>
        <Link
          className={styles.link}
          href='#'
        >
          Terms of Service
        </Link>
      </nav>
      <p className={styles.legal_info}>© {new Date().getFullYear()} Duos AI, Netherlands, KVK 81462549</p>
    </footer>
  );
};

export default Footer;
