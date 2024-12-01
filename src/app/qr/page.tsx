import { FC } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';

const qr: FC = () => {
  return (
    <main className={styles.qr}>
      <div className={styles.qrcode_container}>
        <Image
          src='/pics/qr-code.svg'
          width={342}
          height={342}
          // fill
          quality={100}
          priority
          alt='Duos example'
        />
      </div>
      <p className={styles.qr_text}>
        Scan this&nbsp;QR code using your phone to&nbsp;download the app
      </p>
    </main>
  );
};

export default qr;
