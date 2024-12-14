import { FC } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Contact Us | Duos',
  description: 'Get in touch with the Duos team'
};

const ContactPage: FC = () => {
  return (
    <main className={styles.contact}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Us</h1>
        
        <section className={styles.section}>
          <h2 className={styles.section_title}>General Support</h2>
          <p className={styles.text}>
            For any questions or support, please{' '}
            <a 
              href="mailto:help@duos-ai.com"
              className={styles.link}
             >
               email
           </a>
           {' '}us.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.section_title}>Data Deletion Request</h2>
          <p className={styles.text}>
            To request complete deletion of your data from our platform, please fill out {' '}
            <Link 
              href="https://form.fillout.com/t/q9Ht9Z1oG3us" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
            this form
            </Link>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.section_title}>Join Our Community</h2>
          <p className={styles.text}>
            For updates and discussions, join our{' '}
            <Link 
              href="https://discord.com/channels/1218939899118485635/1218939899118485637"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Discord community
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
