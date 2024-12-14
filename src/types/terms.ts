export interface TermsSection {
    title: string;
    paragraphs: string[];
  }
  
  export interface TermsData {
    title: string;
    lastUpdated: string;
    sections: TermsSection[];
  }
