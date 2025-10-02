/// <reference types="vite/client" />

export type Language = 'de' | 'en' | 'es';

export interface LanguageConfig {
  language: Language;
  apiUrl: string;
  gaTrackingId: string;
  currency: string;
  timezone: string;
  dateFormat: string;
  domain: string;
}

// Get language from URL or environment
const getLanguageFromUrl = (): Language => {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname.includes('burnout-test.samebi.net')) return 'de';
    if (hostname.includes('burnout-check.samebi.net')) return 'en';
    if (hostname.includes('test-burnout.samebi.net')) return 'es';
  }
  return (import.meta.env.VITE_LANGUAGE || 'es') as Language;
};

export const getLanguageConfig = (): LanguageConfig => {
  const lang = getLanguageFromUrl();
  
  const configs: Record<Language, LanguageConfig> = {
    de: {
      language: 'de',
      apiUrl: import.meta.env.VITE_API_URL || 'https://api.samebi.net',
      gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID || 'G-DE-XXXXXXXXX',
      currency: 'EUR',
      timezone: 'Europe/Berlin',
      dateFormat: 'DD.MM.YYYY',
      domain: 'burnout-test.samebi.net'
    },
    en: {
      language: 'en',
      apiUrl: import.meta.env.VITE_API_URL || 'https://en-api.samebi.net',
      gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID || 'G-EN-XXXXXXXXX',
      currency: 'EUR',
      timezone: 'Europe/London',
      dateFormat: 'MM/DD/YYYY',
      domain: 'burnout-check.samebi.net'
    },
    es: {
      language: 'es',
      apiUrl: import.meta.env.VITE_API_URL || 'https://es-api.samebi.net',
      gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID || 'G-ES-XXXXXXXXX',
      currency: 'EUR',
      timezone: 'Europe/Madrid',
      dateFormat: 'DD/MM/YYYY',
      domain: 'test-burnout.samebi.net'
    }
  };

  return configs[lang];
};

export const currentLanguage = getLanguageConfig().language;
export const currentConfig = getLanguageConfig();
