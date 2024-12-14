import { FC } from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links}>
        <Link
          className={styles.link}
          href='/contact'
        >
          Contact Us
        </Link>
        <Link
          className={styles.link}
          href='/privacy_policy'
        >
          Privacy Policy
        </Link>
        <Link
          className={styles.link}
          href='/terms_of_service'
        >
          Terms of Service
        </Link>
      </nav>
      <p className={styles.legal_info}>© {new Date().getFullYear()} Duos AI, Netherlands, KVK 81462549</p>
    </footer>
  );
};

export default Footer;
