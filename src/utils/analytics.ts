import { currentConfig } from '@/config/language';

// Google Analytics 4 Event Tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
      event_category: 'burnout_test',
      event_label: currentConfig.language
    });
  }
};

// Specific event tracking functions
export const trackTestStarted = () => {
  trackEvent('burnout_test_started', {
    test_type: 'mbi',
    language: currentConfig.language
  });
};

export const trackQuestionAnswered = (questionId: string, questionNumber: number) => {
  trackEvent('burnout_question_answered', {
    question_id: questionId,
    question_number: questionNumber,
    language: currentConfig.language
  });
};

export const trackTestCompleted = (scores: any, level: string) => {
  trackEvent('burnout_test_completed', {
    emotional_exhaustion: scores.emotionalExhaustion,
    depersonalization: scores.depersonalization,
    personal_accomplishment: scores.personalAccomplishment,
    total_score: scores.totalScore,
    burnout_level: level,
    language: currentConfig.language
  });
};

export const trackEmailCaptured = (email: string) => {
  trackEvent('email_captured', {
    email_domain: email.split('@')[1],
    test_type: 'burnout',
    language: currentConfig.language
  });
};

export const trackPdfDownloaded = () => {
  trackEvent('pdf_downloaded', {
    test_type: 'burnout',
    language: currentConfig.language
  });
};

export const trackUpsellClicked = (upsellType: string) => {
  trackEvent('upsell_clicked', {
    upsell_type: upsellType,
    test_type: 'burnout',
    language: currentConfig.language
  });
};

// Initialize Google Analytics
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined' && currentConfig.gaTrackingId) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${currentConfig.gaTrackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', currentConfig.gaTrackingId, {
      page_title: document.title,
      page_location: window.location.href
    });
  }
};

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
