'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import { motion } from 'motion/react';
import styles from './Header.module.scss';

const Header: FC = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && scrollDirection !== 'down') {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY && scrollDirection !== 'up') {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollDirection]);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isPhoneByUserAgent = userAgent.includes('android') || userAgent.includes('iphone') || userAgent.includes('ipad');
    if (isPhoneByUserAgent != isPhone) {
      setIsPhone(isPhoneByUserAgent)
    }
  }, [isPhone]);

  return (
    <motion.header
      className={styles.header}
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === 'down' ? '-100%' : '0' }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.header_inner_container}>
        <div className={styles.logo_container}>
          <Link href="/">
            <div className={styles.logo_pic_container}>
              <Image
                src='/logos/duos_logo.svg'
                fill
                alt='Duos logo'
              />
            </div>
            <div className={styles.logo_typo_container}>
              <Image
                src='/logos/duos_typo.svg'
                fill
                alt='Duos typo'
              />
            </div>
          </Link>
        </div>
        <Link
          className={styles.button_link}
          href={isPhone ? '/try' : '/qr'}
          aria-label={isPhone ? 'TryButton' : "QRButton"}>
          <Button className={styles.button}>
            <p className={styles.button_text}>Try Now</p>
          </Button>
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
