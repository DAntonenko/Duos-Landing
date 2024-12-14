import { FC } from 'react';
import styles from './page.module.scss';
import privacyData from '@/data/privacy_policy.json';
import type { PrivacyData } from '@/types/privacy';

const privacy: PrivacyData = privacyData as PrivacyData;

export const dynamic = 'force-static';

export const metadata = {
  title: 'Privacy Policy | Duos',
  description: 'Privacy policy for using the Duos AI interview practice platform'
};

const PrivacyPage: FC = () => {
  return (
    <main className={styles.privacy}>
      <div className={styles.content}>
        {privacy.sections.map((section, index) => (
          <section key={`section-${index}`} className={styles.section}>
            <h2 className={styles.section_title}>{section.title}</h2>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={`paragraph-${index}-${pIndex}`} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
};

export default PrivacyPage;
