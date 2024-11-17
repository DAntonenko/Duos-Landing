'use client';

import { FC, Suspense } from 'react';
import LeadSection from '@/components/LeadSection/LeadSection';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.scss';

const Main: FC = () => {

  const searchParams = useSearchParams();
  const leadParam = searchParams.get('l');

  return (
    <main>
      <LeadSection searchParamsVariant={leadParam} />

      <section className={styles.examples}>
        <div className={styles.example_container}>
          <Image
            className={styles.example}
            src='/pics/duos_example_1.png'
            sizes='(max-width: 600px) 343px, 1572px' // To do: change to real pics width when proper pics will be
            fill
            quality={100}
            priority
            alt='Duos example'
          />
        </div>
        <div className={styles.example_container}>
          <Image
            className={styles.example}
            src='/pics/duos_example_2.png'
            fill
            quality={100}
            priority
            alt='Duos example'
          />
        </div>
        <div className={styles.example_container}>
          <Image
            className={styles.example}
            src='/pics/duos_example_3.png'
            fill
            quality={100}
            priority
            alt='Duos example'
          />
        </div>
        
      </section>
        
      <section className={styles.invitation}>
        <h2 className={styles.invitation_heding}>Join Duos community</h2>
        <div className={styles.invitation_avatars_container}>
          <Image
            className={styles.invitation_avatar}
            src='/avatars/ava_1_x1.png'
            sizes='80px, (min-width: 600px) 128px, (min-width: 768px) 64px, (min-width: 1200px) 100px'
            width={80}
            height={80}
            quality={100}
            alt='Avatar'
          />
          <Image
            className={styles.invitation_avatar}
            src='/avatars/ava_2_x1.png'
            width={80}
            height={80}
            quality={100}
            alt='Avatar'
          />
          <Image
            className={styles.invitation_avatar}
            src='/avatars/ava_3_x1.png'
            width={80}
            height={80}
            quality={100}
            alt='Avatar'
          />
          <Image
            className={styles.invitation_avatar}
            src='/avatars/ava_4_x1.png'
            width={80}
            height={80}
            quality={100}
            alt='Avatar'
          />
          <Image
            className={styles.invitation_avatar}
            src='/avatars/ava_5_x1.png'
            width={80}
            height={80}
            quality={100}
            alt='Avatar'
          />
        </div>
        <p className={styles.invitation_text}>
          Discover a&nbsp;welcoming group of&nbsp;fellow job seekers and industry pros.
          Share your story, give feedback, and stay up&nbsp;to&nbsp;date with the app development
        </p>
        <Link
          className={styles.button_link}
          href='https://discord.com/channels/1218939899118485635/1218939899118485637'
        >
          <Button className={styles.discord_button}>
            <p className={styles.discord_button_text}>Join the Discord community</p>
            <Image
              src='/icons/discord.svg'
              width={24}
              height={18}
              alt='Discord icon'
            />
          </Button>
        </Link>
      </section>
    </main>
  );
};


export default function MainPage() {
  return (
    <Suspense>
      <Main />
    </Suspense>
  )
};
