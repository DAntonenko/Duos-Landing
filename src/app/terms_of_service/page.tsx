import { FC } from 'react';
import styles from './page.module.scss';
import termsData from '@/data/terms_and_conditions.json';
import type { TermsData } from '@/types/terms';

// Cast and declare the data outside the component 
// This will be evaluated at build time
const terms: TermsData = termsData as TermsData;

// Mark the page as static
export const dynamic = 'force-static';

// Automaticaly picked by Next.js and integrated into HTML
export const metadata = {
  title: 'Terms and Conditions | Duos AI',
  description: 'Terms and conditions for using the Duos AI mock interview practice platform'
};

const TermsPage: FC = () => {
  return (
    <main className={styles.terms}>
      <div className={styles.content}>
        {terms.sections.map((section, index) => (
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

export default TermsPage;
