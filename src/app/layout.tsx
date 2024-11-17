import type { Metadata } from 'next';
import localFont from 'next/font/local';
import 'the-new-css-reset/css/reset.css';
import classNames from 'classnames';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './global.scss';
import styles from './layout.module.scss';

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins-Regular.ttf',
      weight: '400',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Duos',
  description: 'Duos Landing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={classNames(poppins.className, styles.main_wrapper)}>
        <div className={styles.main_container}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
