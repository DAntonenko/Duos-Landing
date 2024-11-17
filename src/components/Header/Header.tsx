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

  return (
    <motion.header
      className={styles.header}
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === 'down' ? '-100%' : '0' }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.logo_container}>
        <Image
          src='/logos/duos_logo.svg'
          width={36}
          height={36}
          alt='Duos logo'
        />
        <Image
          src='/logos/duos_typo.svg'
          width={56}
          height={20}
          alt='Duos typo'
        />
      </div>
      <Link
        className={styles.button_link}
        href='#'
      >
        <Button className={styles.button}>
          <p className={styles.button_text}>Try Now</p>
        </Button>
      </Link>
    </motion.header>
  );
};

export default Header;
