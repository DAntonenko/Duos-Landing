'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';

const QR: FC = () => {
  const [qrSource, setQR] = useState("/pics/duos-ai.com.qr.svg");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setQR('/pics/' + window.location.hostname + '.qr.svg');
    }
  }, []);

  return (
    <main className={styles.qr}>
      <div className={styles.qrcode_container}>
        <Image
          src={qrSource}
          width={342}
          height={342}
          // fill
          quality={100}
          priority
          alt="duos-ai.com/try"
        />
      </div>
      <p className={styles.qr_text}>
        Scan this&nbsp;QR code using your phone to&nbsp;download the app
      </p>
    </main>
  );
};

export default QR;
