export interface PrivacySection {
    title: string;
    paragraphs: string[];
}
  
export interface PrivacyData {
  title: string;
  lastUpdated: string;
  sections: PrivacySection[];
}
