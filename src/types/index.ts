export interface Clinic {
  name: string;
  city: string;
  province: string;
  since: number;
}

export interface Treatment {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  institution: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
