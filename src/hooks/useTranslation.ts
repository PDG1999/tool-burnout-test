import { useMemo } from 'react';
import { getTranslations } from '@/translations';
import { currentLanguage } from '@/config/language';

export const useTranslation = () => {
  const translations = useMemo(() => {
    return getTranslations(currentLanguage);
  }, []);

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return { t, translations, language: currentLanguage };
};

export default useTranslation;
