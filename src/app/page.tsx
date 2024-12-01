'use client';

import { FC, Suspense } from 'react';
import LeadSection from '@/components/LeadSection/LeadSection';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import classNames from 'classnames';
import styles from './page.module.scss';

const Main: FC = () => {

  const searchParams = useSearchParams();
  const leadParam = searchParams.get('l');

  const duosExampleSizes = `
    (max-width: 375px) 286px,
    (max-width: 600px) 456px,
    (max-width: 768px) 182px,
    (max-width: 1200px) 286px,
    (max-width: 1400px) 340px,
    452px
  `;

  return (
    <main>
      <LeadSection searchParamsVariant={leadParam} />

      <section className={styles.examples}>
        <div className={styles.example_container}>
          <Image
            className={styles.example}
            src='/pics/duos_example_1.png'
            sizes= {duosExampleSizes}
            fill
            quality={100}
            priority
            alt='Duos example'
          />
          <p className={classNames(styles.example_text, styles.example_text__1)}>
            Tackle industry-specific topics and gain personalized feedback to&nbsp;elevate your performance
          </p>
        </div>
        <div className={styles.example_container}>
          <Image
            className={styles.example}
            src='/pics/duos_example_2.png'
            sizes= {duosExampleSizes}
            fill
            quality={100}
            priority
            alt='Duos example'
          />
          <p className={classNames(styles.example_text, styles.example_text__2)}>
            Raise your interview readiness by&nbsp;playing out realistic interview scenarios against AI interviewers
          </p>
        </div>
        <div className={styles.example_container}>
          <Image
            className={styles.example}
            src='/pics/duos_example_3.png'
            sizes= {duosExampleSizes}
            fill
            quality={100}
            priority
            alt='Duos example'
          />
          <p className={classNames(styles.example_text, styles.example_text__3)}>
            Practice, make mistakes and get skills for the real world without ever failing real interviews
          </p>
        </div>
      </section>
        
      <section className={styles.invitation}>
        <h2 className={styles.invitation_heding}>Join Duos community</h2>
        <div className={styles.invitation_wrapper}>
          <div className={styles.invitation_avatars_container}>
            <div className={styles.invitation_avatar}>
              <Image
                src='/avatars/ava_1_x1.png'
                sizes='80px, (min-width: 600px) 128px, (min-width: 768px) 64px, (min-width: 1200px) 100px'
                fill
                quality={100}
                alt='Avatar'
              />
            </div>
            <div className={styles.invitation_avatar}>
              <Image
                src='/avatars/ava_2_x1.png'
                sizes='80px, (min-width: 600px) 128px, (min-width: 768px) 64px, (min-width: 1200px) 100px'
                fill
                quality={100}
                alt='Avatar'
              />
            </div>
            <div className={styles.invitation_avatar}>
              <Image
                src='/avatars/ava_3_x1.png'
                sizes='80px, (min-width: 600px) 128px, (min-width: 768px) 64px, (min-width: 1200px) 100px'
                fill
                quality={100}
                alt='Avatar'
              />
            </div>
            <div className={styles.invitation_avatar}>
              <Image
                src='/avatars/ava_4_x1.png'
                sizes='80px, (min-width: 600px) 128px, (min-width: 768px) 64px, (min-width: 1200px) 100px'
                fill
                quality={100}
                alt='Avatar'
              />
            </div>
            <div className={styles.invitation_avatar}>
              <Image
                src='/avatars/ava_5_x1.png'
                sizes='80px, (min-width: 600px) 128px, (min-width: 768px) 64px, (min-width: 1200px) 100px'
                fill
                quality={100}
                alt='Avatar'
              />
            </div>
          </div>
          <p className={styles.invitation_text}>
            Discover a&nbsp;welcoming group of&nbsp;fellow job seekers and industry pros.
            Share your story, give feedback, and stay up&nbsp;to&nbsp;date with the app development
          </p>
        </div>
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
