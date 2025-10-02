import { useMemo } from 'react';
import { getTranslations } from '@/translations';
import { currentLanguage } from '@/config/language';

const useTranslation = () => {
  const translations = useMemo(() => {
    return getTranslations(currentLanguage);
  }, []);

  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    if (typeof value !== 'string') {
      console.warn(`Translation value is not a string: ${key}`);
      return key;
    }
    
    // Replace placeholders
    if (params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return params[paramKey]?.toString() || match;
      });
    }
    
    return value;
  };

  return { t, language: currentLanguage };
};

export default useTranslation;
