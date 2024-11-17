import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import styles from './LeadSection.module.scss';

interface ILeadSectionProps {
  searchParamsVariant?: string | null
}

const LeadSection: FC<ILeadSectionProps> = ({ searchParamsVariant }) => {

  const [leadVariant, setLeadVariant] = useState<number | null>(null);

  useEffect(() => {
    function selectLeadVariant() {
      if (searchParamsVariant && +searchParamsVariant >= 1 && +searchParamsVariant <= 8 ) {
        return Math.trunc(+searchParamsVariant);
      } else {
        return Math.floor(Math.random() * 8) + 1;
      }
    }

    setLeadVariant(selectLeadVariant());
  }, [searchParamsVariant]);

  function selectLeadHeading() {
    switch(leadVariant) {
      case 1:
        return (
          <h1 className={styles.main_heading}>
            Build Confidence by
            <span className={styles.main_heading_circled}>&nbsp;practicing&nbsp;
            </span> <span className={styles.main_heading_preceded_by_logo}>Job</span> Interviews
            in&nbsp;<span className={styles.main_heading_underlined}>AI</span>-powered Game Environment
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
            Prepare <span className={styles.main_heading_circled}>&nbsp;Smarter.&nbsp;</span> Interview Better. 
            Play <span className={styles.main_heading_followed_by_logo}>Duos</span>
          </h1>
        )

      case 4:
        return (
          <h1 className={styles.main_heading}>
            Job Interview is&nbsp;a&nbsp;<span className={styles.main_heading_circled}>&nbsp;Game.&nbsp;</span>
            Become the One Who Wins&nbsp;<span className={styles.main_heading_followed_by_logo}>It</span>
          </h1>
        )

      case 5:
        return (
          <h1 className={styles.main_heading}>
            Conversational <span className={styles.main_heading_circled}>&nbsp;Roleplay&nbsp;</span> 
            <span className={styles.main_heading_preceded_by_logo}>App</span>&emsp;to&nbsp;Sharpen 
            Your Interview Skills
          </h1>
        )

      case 6:
        return (
          <h1 className={styles.main_heading}>
            Job Interview is&nbsp;a&nbsp;<span className={styles.main_heading_circled}>&nbsp;Game.&nbsp;</span>&emsp;
            Learn to&nbsp;<span className={styles.main_heading_followed_by_logo}>Win</span> Beat the&nbsp;System
          </h1>
        )

      case 7:
        return (
          <h1 className={styles.main_heading}>
            Innovative <span className={styles.main_heading_circled}>&nbsp;Game&nbsp;</span>
            <span className={styles.main_heading_preceded_by_logo}>to</span>&nbsp;Sharpen 
            Your Interview Skills
          </h1>
        )

      case 8:
        return (
          <h1 className={styles.main_heading}>
            Innovative <span className={styles.main_heading_circled}>&nbsp;Game&nbsp;</span>
            <span className={styles.main_heading_preceded_by_logo}>to</span>&nbsp;Level&nbsp;Up 
            Your Interview Skills
          </h1>
        )

      default:
        return null;
    }
  }

  return (
    <section className={styles.lead}>
      {leadVariant !== null && selectLeadHeading()}
      <p className={styles.lead_text}>
        Prepare smarter, interview better with personalized AI&nbsp;simulations.
        Try practicing for free and see the difference in&nbsp;your next real interview.
        Available for all job roles in&nbsp;and around the&nbsp;IT&nbsp;industry
      </p>
      <div className={styles.stores_buttons_wrapper}>
        <Link
          className={styles.button_link}
          href='#'
        >
          <Button className={styles.button}>
            <Image
              className={styles.button_image}
              src='/backgrounds/appstore.svg'
              fill
              // width={103}
              // height={29}
              alt='Appstore button'
            />
          </Button>
        </Link>
        <Link
          className={styles.button_link}
          href='#'
        >
          <Button className={styles.button}>
            <Image
              className={styles.button_image}
              src='/backgrounds/googleplay.svg'
              fill
              // width={100}
              // height={29}
              alt='Googleplay button'
            />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LeadSection;
