import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './LeadSection.module.scss';
import { appStoreUrl, googlePlayUrl } from '@/data/links';

interface ILeadSectionProps {
  searchParamsVariant?: string | null
}

const LeadSection: FC<ILeadSectionProps> = ({ searchParamsVariant }) => {

  const [leadVariant, setLeadVariant] = useState<number | null>(null);

  useEffect(() => {
    function selectLeadVariant() {
      if (searchParamsVariant) {
        return Math.trunc(+searchParamsVariant);
      } else {
        return 0;
      }
    }

    setLeadVariant(selectLeadVariant());
  }, [searchParamsVariant]);

  function selectLeadHeading() {
    switch (leadVariant) {
      case 1:
        return (
          <h1 className={styles.main_heading}>
            Get <span className={styles.main_heading_underlined}>fantastic</span>
            &nbsp;<br />at job interviews <br />by practicing
            with&nbsp;<span className={styles.main_heading_followed_by_logo}>AI</span>
          </h1>
        )

      case 2:
        return (
          <h1 className={styles.main_heading}>
            <span className={styles.main_heading_circled}>&nbsp;Innovative&nbsp;</span> Conversational
            Game <span className={styles.main_heading_preceded_by_logo}>to</span>&nbsp;Sharpen
            Your Interview Skills
          </h1>
        )

      case 3:
        return (
          <h1 className={styles.main_heading}>
            Job Interview is&nbsp;a&nbsp;<span className={styles.main_heading_circled}>&nbsp;Game.&nbsp;</span>
            Become the One Who Wins&nbsp;<span className={styles.main_heading_followed_by_logo}>It</span>
          </h1>
        )

      default:
        return (
          <h1 className={styles.main_heading}>
            Prepare <span className={styles.main_heading_circled}>&nbsp;Smarter.&nbsp;</span><br /> Interview Better.<br />
            Play <span className={styles.main_heading_followed_by_logo}>Duos</span>
          </h1>
        )
    }
  }

  return (
    <section className={styles.lead}>
      {leadVariant !== null && selectLeadHeading()}
      <p className={styles.lead_text}>
      Duos is an AI simulation to sharpen your interview skills. 
    <br />  
    Try your first mock interview and get free feedback
      </p>
      <div className={styles.stores_buttons_wrapper}>
        <Link
          aria-label="AppStoreButton"
          className={styles.button_link}
          href={appStoreUrl}
        >
          <Image
            className={styles.button_image}
            src='/backgrounds/appstore.svg'
            fill
            // width={103}
            // height={29}
            alt='Appstore button'
          />
        </Link>
        <Link
          aria-label="GooglePlayButton"
          className={styles.button_link}
          href={googlePlayUrl}
        >
          <Image
            className={styles.button_image}
            src='/backgrounds/googleplay.svg'
            fill
            // width={100}
            // height={29}
            alt='Googleplay button'
          />
        </Link>
      </div>
    </section>
  );
};

export default LeadSection;
