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
    scores: {
      emotionalExhaustion: string;
      depersonalization: string;
      personalAccomplishment: string;
      totalScore: string;
    };
    level: {
      low: string;
      moderate: string;
      high: string;
      critical: string;
    };
    recommendations: {
      title: string;
      low: string[];
      moderate: string[];
      high: string[];
      critical: string[];
    };
    downloadPdf: string;
    shareResults: string;
  };
  
  // Email Capture
  email: {
    title: string;
    subtitle: string;
    placeholder: string;
    submitButton: string;
    privacy: string;
    benefits: string[];
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    retry: string;
    close: string;
    save: string;
    cancel: string;
    continue: string;
    back: string;
    next: string;
    finish: string;
  };
}

const germanTranslations: Translations = {
  meta: {
    title: "Burnout-Test | Professionelle Bewertung - SAMEBI",
    description: "Wissenschaftlich validierter Burnout-Test basierend auf MBI. Kostenlose Bewertung in 5 Minuten mit personalisierten Empfehlungen.",
    keywords: "burnout test, psychologische bewertung, maslach burnout inventory, psychologen deutschland, berufsausbrennen",
    ogTitle: "Kostenloser Burnout-Test | SAMEBI",
    ogDescription: "Entdecken Sie Ihr Burnout-Risiko mit unserem wissenschaftlich validierten Test. Sofortige Ergebnisse und personalisierte Empfehlungen."
  },
  nav: {
    home: "Startseite",
    about: "Über uns",
    contact: "Kontakt",
    privacy: "Datenschutz",
    terms: "AGB"
  },
  landing: {
    heroTitle: "Professioneller Burnout-Test",
    heroSubtitle: "Wissenschaftlich validiert (MBI)",
    heroDescription: "Bewerten Sie Ihr Burnout-Risiko in nur 5 Minuten mit unserem professionellen, wissenschaftlich fundierten Test basierend auf dem Maslach Burnout Inventory.",
    startTestButton: "Test jetzt starten",
    features: {
      scientific: "Wissenschaftlich validiert (MBI)",
      immediate: "Sofortige Ergebnisse",
      personalized: "Personalisierte Empfehlungen",
      confidential: "Vollständig vertraulich"
    },
    testimonials: {
      title: "Was unsere Nutzer sagen"
    }
  },
  test: {
    title: "Burnout-Risiko Assessment",
    subtitle: "Beantworten Sie die folgenden Fragen ehrlich basierend auf Ihren Erfahrungen der letzten 12 Monate",
    progress: "Frage {current} von {total}",
    question: "Frage",
    nextButton: "Weiter",
    backButton: "Zurück",
    submitButton: "Test abschließen",
    loading: "Wird ausgewertet...",
    scaleLabels: {
      0: "Nie",
      1: "Ein paar Mal im Jahr oder weniger",
      2: "Einmal im Monat oder weniger",
      3: "Ein paar Mal im Monat",
      4: "Einmal pro Woche",
      5: "Ein paar Mal pro Woche",
      6: "Jeden Tag"
    }
  },
  results: {
    title: "Ihre Burnout-Test Ergebnisse",
    subtitle: "Basierend auf Ihren Antworten",
    scores: {
      emotionalExhaustion: "Emotionale Erschöpfung",
      depersonalization: "Depersonalisation",
      personalAccomplishment: "Persönliche Leistungsfähigkeit",
      totalScore: "Gesamt-Score"
    },
    level: {
      low: "Niedriges Burnout-Risiko",
      moderate: "Moderates Burnout-Risiko",
      high: "Hohes Burnout-Risiko",
      critical: "Kritisches Burnout-Risiko"
    },
    recommendations: {
      title: "Personalisierte Empfehlungen",
      low: [
        "Behalten Sie Ihre aktuellen gesunden Praktiken bei",
        "Führen Sie regelmäßige Selbstbeobachtung durch",
        "Konzentrieren Sie sich auf Präventionsstrategien",
        "Unterstützen Sie Kollegen, die möglicherweise kämpfen"
      ],
      moderate: [
        "Implementieren Sie präventive Stressmanagement-Strategien",
        "Überprüfen Sie Ihre Work-Life-Balance",
        "Erwägen Sie berufliche Weiterentwicklung",
        "Regelmäßige Selbstfürsorge-Praktiken"
      ],
      high: [
        "Dringende Stressmanagement-Intervention erforderlich",
        "Erwägen Sie eine sofortige Arbeitsbelastungsreduzierung",
        "Suchen Sie professionelle Beratung auf",
        "Implementieren Sie tägliche Stressreduktionstechniken"
      ],
      critical: [
        "Sofortige professionelle Intervention erforderlich",
        "Erwägen Sie, medizinischen Urlaub zu nehmen",
        "Suchen Sie spezialisierte Burnout-Behandlung auf",
        "Implementieren Sie einen umfassenden Genesungsplan"
      ]
    },
    downloadPdf: "PDF-Report herunterladen",
    shareResults: "Ergebnisse teilen"
  },
  email: {
    title: "Detaillierte Burnout-Analyse erhalten",
    subtitle: "Erhalten Sie eine ausführliche Auswertung und personalisierte Empfehlungen",
    placeholder: "Ihre E-Mail-Adresse",
    submitButton: "Analyse anfordern",
    privacy: "Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.",
    benefits: [
      "Detaillierte Burnout-Analyse",
      "Personalisierte Bewältigungsstrategien",
      "Professionelle Empfehlungen",
      "Kostenlose Nachbetreuung"
    ]
  },
  common: {
    loading: "Wird geladen...",
    error: "Ein Fehler ist aufgetreten",
    retry: "Erneut versuchen",
    close: "Schließen",
    save: "Speichern",
    cancel: "Abbrechen",
    continue: "Fortfahren",
    back: "Zurück",
    next: "Weiter",
    finish: "Abschließen"
  }
};

const englishTranslations: Translations = {
  meta: {
    title: "Burnout Test | Professional Assessment - SAMEBI",
    description: "Scientifically validated burnout test based on MBI. Free assessment in 5 minutes with personalized recommendations.",
    keywords: "burnout test, psychological assessment, maslach burnout inventory, psychologists uk, professional burnout",
    ogTitle: "Free Burnout Test | SAMEBI",
    ogDescription: "Discover your burnout risk with our scientifically validated test. Immediate results and personalized recommendations."
  },
  nav: {
    home: "Home",
    about: "About",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms"
  },
  landing: {
    heroTitle: "Professional Burnout Test",
    heroSubtitle: "Scientifically Validated (MBI)",
    heroDescription: "Assess your burnout risk in just 5 minutes with our professional, evidence-based test based on the Maslach Burnout Inventory.",
    startTestButton: "Start Test Now",
    features: {
      scientific: "Scientifically validated (MBI)",
      immediate: "Immediate results",
      personalized: "Personalized recommendations",
      confidential: "Completely confidential"
    },
    testimonials: {
      title: "What our users say"
    }
  },
  test: {
    title: "Burnout Risk Assessment",
    subtitle: "Please answer the following questions honestly based on your experiences over the past 12 months",
    progress: "Question {current} of {total}",
    question: "Question",
    nextButton: "Next",
    backButton: "Back",
    submitButton: "Complete Test",
    loading: "Analyzing...",
    scaleLabels: {
      0: "Never",
      1: "A few times a year or less",
      2: "Once a month or less",
      3: "A few times a month",
      4: "Once a week",
      5: "A few times a week",
      6: "Every day"
    }
  },
  results: {
    title: "Your Burnout Test Results",
    subtitle: "Based on your responses",
    scores: {
      emotionalExhaustion: "Emotional Exhaustion",
      depersonalization: "Depersonalization",
      personalAccomplishment: "Personal Accomplishment",
      totalScore: "Total Score"
    },
    level: {
      low: "Low Burnout Risk",
      moderate: "Moderate Burnout Risk",
      high: "High Burnout Risk",
      critical: "Critical Burnout Risk"
    },
    recommendations: {
      title: "Personalized Recommendations",
      low: [
        "Maintain your current healthy practices",
        "Continue regular self-monitoring",
        "Focus on prevention strategies",
        "Support colleagues who may be struggling"
      ],
      moderate: [
        "Implement preventive stress management strategies",
        "Review your work-life balance",
        "Consider professional development",
        "Regular self-care practices"
      ],
      high: [
        "Urgent stress management intervention needed",
        "Consider reducing workload immediately",
        "Seek professional counseling",
        "Implement daily stress reduction techniques"
      ],
      critical: [
        "Immediate professional intervention required",
        "Consider taking medical leave",
        "Seek specialized burnout treatment",
        "Implement comprehensive recovery plan"
      ]
    },
    downloadPdf: "Download PDF Report",
    shareResults: "Share Results"
  },
  email: {
    title: "Get Detailed Burnout Analysis",
    subtitle: "Receive a comprehensive evaluation and personalized recommendations",
    placeholder: "Your email address",
    submitButton: "Request Analysis",
    privacy: "Your data is treated confidentially and not shared with third parties.",
    benefits: [
      "Detailed burnout analysis",
      "Personalized coping strategies",
      "Professional recommendations",
      "Free follow-up support"
    ]
  },
  common: {
    loading: "Loading...",
    error: "An error occurred",
    retry: "Try again",
    close: "Close",
    save: "Save",
    cancel: "Cancel",
    continue: "Continue",
    back: "Back",
    next: "Next",
    finish: "Finish"
  }
};

const spanishTranslations: Translations = {
  meta: {
    title: "Test de Burnout | Evaluación Profesional - SAMEBI",
    description: "Test de burnout científicamente validado basado en MBI. Evaluación gratuita en 5 minutos con recomendaciones personalizadas.",
    keywords: "test burnout, evaluación psicológica, maslach burnout inventory, psicólogos españa, agotamiento profesional",
    ogTitle: "Test de Burnout Gratuito | SAMEBI",
    ogDescription: "Descubre tu nivel de burnout con nuestro test científicamente validado. Resultados inmediatos y recomendaciones personalizadas."
  },
  nav: {
    home: "Inicio",
    about: "Acerca de",
    contact: "Contacto",
    privacy: "Privacidad",
    terms: "Términos"
  },
  landing: {
    heroTitle: "Test de Burnout Profesional",
    heroSubtitle: "Científicamente Validado (MBI)",
    heroDescription: "Evalúa tu riesgo de burnout en solo 5 minutos con nuestro test profesional basado en el Inventario de Burnout de Maslach.",
    startTestButton: "Comenzar Test Ahora",
    features: {
      scientific: "Científicamente validado (MBI)",
      immediate: "Resultados inmediatos",
      personalized: "Recomendaciones personalizadas",
      confidential: "Completamente confidencial"
    },
    testimonials: {
      title: "Lo que dicen nuestros usuarios"
    }
  },
  test: {
    title: "Evaluación de Riesgo de Burnout",
    subtitle: "Por favor responde las siguientes preguntas honestamente basándote en tus experiencias de los últimos 12 meses",
    progress: "Pregunta {current} de {total}",
    question: "Pregunta",
    nextButton: "Siguiente",
    backButton: "Atrás",
    submitButton: "Completar Test",
    loading: "Analizando...",
    scaleLabels: {
      0: "Nunca",
      1: "Algunas veces al año o menos",
      2: "Una vez al mes o menos",
      3: "Algunas veces al mes",
      4: "Una vez a la semana",
      5: "Algunas veces a la semana",
      6: "Todos los días"
    }
  },
  results: {
    title: "Tus Resultados del Test de Burnout",
    subtitle: "Basado en tus respuestas",
    scores: {
      emotionalExhaustion: "Agotamiento Emocional",
      depersonalization: "Despersonalización",
      personalAccomplishment: "Realización Personal",
      totalScore: "Puntuación Total"
    },
    level: {
      low: "Riesgo Bajo de Burnout",
      moderate: "Riesgo Moderado de Burnout",
      high: "Riesgo Alto de Burnout",
      critical: "Riesgo Crítico de Burnout"
    },
    recommendations: {
      title: "Recomendaciones Personalizadas",
      low: [
        "Mantén tus prácticas saludables actuales",
        "Continúa con el monitoreo regular de ti mismo",
        "Enfócate en estrategias de prevención",
        "Apoya a colegas que puedan estar luchando"
      ],
      moderate: [
        "Implementa estrategias preventivas de manejo del estrés",
        "Revisa tu equilibrio trabajo-vida",
        "Considera el desarrollo profesional",
        "Prácticas regulares de autocuidado"
      ],
      high: [
        "Se requiere intervención urgente de manejo del estrés",
        "Considera reducir la carga de trabajo inmediatamente",
        "Busca asesoramiento profesional",
        "Implementa técnicas diarias de reducción del estrés"
      ],
      critical: [
        "Se requiere intervención profesional inmediata",
        "Considera tomar licencia médica",
        "Busca tratamiento especializado para burnout",
        "Implementa un plan integral de recuperación"
      ]
    },
    downloadPdf: "Descargar Reporte PDF",
    shareResults: "Compartir Resultados"
  },
  email: {
    title: "Obtener Análisis Detallado de Burnout",
    subtitle: "Recibe una evaluación completa y recomendaciones personalizadas",
    placeholder: "Tu dirección de email",
    submitButton: "Solicitar Análisis",
    privacy: "Tus datos son tratados confidencialmente y no se comparten con terceros.",
    benefits: [
      "Análisis detallado de burnout",
      "Estrategias personalizadas de afrontamiento",
      "Recomendaciones profesionales",
      "Soporte de seguimiento gratuito"
    ]
  },
  common: {
    loading: "Cargando...",
    error: "Ocurrió un error",
    retry: "Intentar de nuevo",
    close: "Cerrar",
    save: "Guardar",
    cancel: "Cancelar",
    continue: "Continuar",
    back: "Atrás",
    next: "Siguiente",
    finish: "Finalizar"
  }
};

export const translations: Record<Language, Translations> = {
  de: germanTranslations,
  en: englishTranslations,
  es: spanishTranslations
};

export const getTranslations = (language: Language): Translations => {
  return translations[language] || translations.es;
};
