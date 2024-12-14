'use client';

import { FC, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import QR from '../qr/page';
import { appStoreUrl, googlePlayUrl } from '@/data/links';

const Try: FC = () => {
  const router = useRouter();

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('android')) {
      router.replace(googlePlayUrl);
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
      router.replace(appStoreUrl);
    } else {
      router.replace('/qr');
    }
  }, [router]);


  return (
    <QR></QR>
  );
};

export default Try;
