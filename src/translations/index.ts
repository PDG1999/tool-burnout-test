import { Language } from '@/config/language';

export interface Translations {
  // Meta & SEO
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
  };
  
  // Navigation & Layout
  nav: {
    home: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
  };
  
  // Landing Page
  landing: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    startTestButton: string;
    features: {
      scientific: string;
      immediate: string;
      personalized: string;
      confidential: string;
    };
    testimonials: {
      title: string;
    };
  };
  
  // Burnout Test
  test: {
    title: string;
    subtitle: string;
    progress: string;
    question: string;
    nextButton: string;
    backButton: string;
    submitButton: string;
    loading: string;
    scaleLabels: Record<number, string>;
  };
  
  // Results
  results: {
    title: string;
    subtitle: string;
    level: Record<string, string>;
    scores: {
      emotionalExhaustion: string;
      depersonalization: string;
      personalAccomplishment: string;
    };
    recommendations: {
      title: string;
    };
    downloadPdf: string;
    shareResults: string;
  };
  
  // Email Capture
  email: {
    title: string;
    subtitle: string;
    privacy: string;
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    retry: string;
  };
}

const translations: Record<Language, Translations> = {
  de: {
    meta: {
      title: '🔥 Kostenloser Burnout-Test 2024 | Wissenschaftlich validiert | SAMEBI',
      description: '🔥 Kostenloser Burnout-Test 2024! Wissenschaftlich validiert (MBI) - 5 Min. - Sofortige Ergebnisse - Personalisierte Empfehlungen - Vertraulich & Anonym',
      keywords: 'burnout test, kostenlos, online, wissenschaftlich, MBI, maslach burnout inventory, psychologen deutschland, berufsausbrennen, stress test, burnout prävention',
      ogTitle: '🔥 Kostenloser Burnout-Test 2024 | SAMEBI',
      ogDescription: 'Entdecken Sie Ihr Burnout-Risiko mit unserem wissenschaftlich validierten Test. Sofortige Ergebnisse und personalisierte Empfehlungen.'
    },
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      contact: 'Kontakt',
      privacy: 'Datenschutz',
      terms: 'AGB'
    },
    landing: {
      heroTitle: '🔥 Kostenloser Burnout-Test 2024',
      heroSubtitle: 'Wissenschaftlich validiert',
      heroDescription: 'Entdecken Sie Ihr Burnout-Risiko mit unserem professionellen, wissenschaftlich fundierten Test. Kostenlos, vertraulich und sofort verfügbar. Über 50.000 Menschen haben bereits getestet!',
      startTestButton: '🚀 Jetzt kostenlos testen',
      features: {
        scientific: 'Wissenschaftlich validiert (MBI)',
        immediate: 'Sofortige Ergebnisse',
        personalized: 'Personalisierte Empfehlungen',
        confidential: '100% Vertraulich'
      },
      testimonials: {
        title: 'Was unsere Nutzer sagen'
      }
    },
    test: {
      title: 'Burnout-Test',
      subtitle: 'Beantworten Sie die folgenden Fragen ehrlich',
      progress: 'Fortschritt',
      question: 'Frage',
      nextButton: 'Weiter',
      backButton: 'Zurück',
      submitButton: 'Test abschließen',
      loading: 'Lade Test...',
      scaleLabels: {
        0: 'Nie',
        1: 'Ein paar Mal im Jahr oder weniger',
        2: 'Einmal im Monat oder weniger',
        3: 'Ein paar Mal im Monat',
        4: 'Einmal pro Woche',
        5: 'Ein paar Mal pro Woche',
        6: 'Jeden Tag'
      }
    },
    results: {
      title: 'Ihre Burnout-Test Ergebnisse',
      subtitle: 'Hier sind Ihre personalisierten Ergebnisse',
      level: {
        low: 'Niedriges Burnout-Risiko',
        moderate: 'Moderates Burnout-Risiko',
        high: 'Hohes Burnout-Risiko',
        severe: 'Schweres Burnout-Risiko'
      },
      scores: {
        emotionalExhaustion: 'Emotionale Erschöpfung',
        depersonalization: 'Depersonalisation',
        personalAccomplishment: 'Persönliche Leistungsfähigkeit'
      },
      recommendations: {
        title: 'Empfehlungen für Sie'
      },
      downloadPdf: 'PDF herunterladen',
      shareResults: 'Ergebnisse teilen'
    },
    email: {
      title: '💎 Vertiefende Burnout-Analyse',
      subtitle: 'Erhalten Sie eine detaillierte, von Psychologen geprüfte Analyse mit personalisierten Empfehlungen',
      privacy: 'Ihre E-Mail-Adresse wird nur für die Zusendung der Analyse verwendet und nicht an Dritte weitergegeben.'
    },
    common: {
      loading: 'Lädt...',
      error: 'Ein Fehler ist aufgetreten',
      retry: 'Erneut versuchen'
    }
  },
  en: {
    meta: {
      title: '🔥 Free Burnout Test 2024 | Scientifically Validated | SAMEBI',
      description: '🔥 Free Burnout Test 2024! Scientifically validated (MBI) - 5 Min. - Instant Results - Personalized Recommendations - Confidential & Anonymous',
      keywords: 'burnout test, free, online, scientific, MBI, maslach burnout inventory, psychologists, job burnout, stress test, burnout prevention',
      ogTitle: '🔥 Free Burnout Test 2024 | SAMEBI',
      ogDescription: 'Discover your burnout risk with our scientifically validated test. Instant results and personalized recommendations.'
    },
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms'
    },
    landing: {
      heroTitle: '🔥 Free Burnout Test 2024',
      heroSubtitle: 'Scientifically Validated',
      heroDescription: 'Discover your burnout risk with our professional, scientifically-based test. Free, confidential and instantly available. Over 50,000 people have already tested!',
      startTestButton: '🚀 Start free test now',
      features: {
        scientific: 'Scientifically validated (MBI)',
        immediate: 'Instant results',
        personalized: 'Personalized recommendations',
        confidential: '100% Confidential'
      },
      testimonials: {
        title: 'What our users say'
      }
    },
    test: {
      title: 'Burnout Test',
      subtitle: 'Please answer the following questions honestly',
      progress: 'Progress',
      question: 'Question',
      nextButton: 'Next',
      backButton: 'Back',
      submitButton: 'Complete Test',
      loading: 'Loading test...',
      scaleLabels: {
        0: 'Never',
        1: 'A few times a year or less',
        2: 'Once a month or less',
        3: 'A few times a month',
        4: 'Once a week',
        5: 'A few times a week',
        6: 'Every day'
      }
    },
    results: {
      title: 'Your Burnout Test Results',
      subtitle: 'Here are your personalized results',
      level: {
        low: 'Low Burnout Risk',
        moderate: 'Moderate Burnout Risk',
        high: 'High Burnout Risk',
        severe: 'Severe Burnout Risk'
      },
      scores: {
        emotionalExhaustion: 'Emotional Exhaustion',
        depersonalization: 'Depersonalization',
        personalAccomplishment: 'Personal Accomplishment'
      },
      recommendations: {
        title: 'Recommendations for You'
      },
      downloadPdf: 'Download PDF',
      shareResults: 'Share Results'
    },
    email: {
      title: '💎 Detailed Burnout Analysis',
      subtitle: 'Get a detailed, psychologist-reviewed analysis with personalized recommendations',
      privacy: 'Your email address will only be used to send the analysis and will not be shared with third parties.'
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      retry: 'Try again'
    }
  },
  es: {
    meta: {
      title: '🔥 Test de Burnout Gratis 2024 | Científicamente Validado | SAMEBI',
      description: '🔥 Test de Burnout Gratis 2024! Científicamente validado (MBI) - 5 Min. - Resultados Inmediatos - Recomendaciones Personalizadas - Confidencial y Anónimo',
      keywords: 'test burnout, gratis, online, científico, MBI, maslach burnout inventory, psicólogos, agotamiento laboral, test estrés, prevención burnout',
      ogTitle: '🔥 Test de Burnout Gratis 2024 | SAMEBI',
      ogDescription: 'Descubre tu riesgo de burnout con nuestro test científicamente validado. Resultados inmediatos y recomendaciones personalizadas.'
    },
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      contact: 'Contacto',
      privacy: 'Privacidad',
      terms: 'Términos'
    },
    landing: {
      heroTitle: '🔥 Test de Burnout Gratis 2024',
      heroSubtitle: 'Científicamente Validado',
      heroDescription: 'Descubre tu riesgo de burnout con nuestro test profesional y científicamente basado. Gratis, confidencial y disponible al instante. ¡Más de 50,000 personas ya han probado!',
      startTestButton: '🚀 Comenzar test gratis',
      features: {
        scientific: 'Científicamente validado (MBI)',
        immediate: 'Resultados inmediatos',
        personalized: 'Recomendaciones personalizadas',
        confidential: '100% Confidencial'
      },
      testimonials: {
        title: 'Lo que dicen nuestros usuarios'
      }
    },
    test: {
      title: 'Test de Burnout',
      subtitle: 'Por favor responde las siguientes preguntas honestamente',
      progress: 'Progreso',
      question: 'Pregunta',
      nextButton: 'Siguiente',
      backButton: 'Atrás',
      submitButton: 'Completar Test',
      loading: 'Cargando test...',
      scaleLabels: {
        0: 'Nunca',
        1: 'Algunas veces al año o menos',
        2: 'Una vez al mes o menos',
        3: 'Algunas veces al mes',
        4: 'Una vez a la semana',
        5: 'Algunas veces a la semana',
        6: 'Todos los días'
      }
    },
    results: {
      title: 'Tus Resultados del Test de Burnout',
      subtitle: 'Aquí están tus resultados personalizados',
      level: {
        low: 'Riesgo Bajo de Burnout',
        moderate: 'Riesgo Moderado de Burnout',
        high: 'Riesgo Alto de Burnout',
        severe: 'Riesgo Severo de Burnout'
      },
      scores: {
        emotionalExhaustion: 'Agotamiento Emocional',
        depersonalization: 'Despersonalización',
        personalAccomplishment: 'Logro Personal'
      },
      recommendations: {
        title: 'Recomendaciones para Ti'
      },
      downloadPdf: 'Descargar PDF',
      shareResults: 'Compartir Resultados'
    },
    email: {
      title: '💎 Análisis Detallado de Burnout',
      subtitle: 'Obtén un análisis detallado, revisado por psicólogos, con recomendaciones personalizadas',
      privacy: 'Tu dirección de email solo se usará para enviar el análisis y no se compartirá con terceros.'
    },
    common: {
      loading: 'Cargando...',
      error: 'Ocurrió un error',
      retry: 'Intentar de nuevo'
    }
  }
};

export const getTranslations = (language: Language): Translations => {
  return translations[language] || translations.es;
};

export default translations;
