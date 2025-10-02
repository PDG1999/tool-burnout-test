import { currentConfig } from '@/config/language';

export const updateMetaTags = () => {
  if (typeof document === 'undefined') return;

  const language = currentConfig.language;
  
  // Update title
  const title = document.querySelector('title');
  if (title) {
    switch (language) {
      case 'de':
        title.textContent = 'Burnout-Test | Professionelle Bewertung - SAMEBI';
        break;
      case 'en':
        title.textContent = 'Burnout Test | Professional Assessment - SAMEBI';
        break;
      case 'es':
        title.textContent = 'Test de Burnout | Evaluación Profesional - SAMEBI';
        break;
    }
  }

  // Update meta description
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    switch (language) {
      case 'de':
        description.setAttribute('content', 'Wissenschaftlich validierter Burnout-Test basierend auf MBI. Kostenlose Bewertung in 5 Minuten mit personalisierten Empfehlungen.');
        break;
      case 'en':
        description.setAttribute('content', 'Scientifically validated burnout test based on MBI. Free assessment in 5 minutes with personalized recommendations.');
        break;
      case 'es':
        description.setAttribute('content', 'Test de burnout científicamente validado basado en MBI. Evaluación gratuita en 5 minutos con recomendaciones personalizadas.');
        break;
    }
  }

  // Update Open Graph title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    switch (language) {
      case 'de':
        ogTitle.setAttribute('content', 'Kostenloser Burnout-Test | SAMEBI');
        break;
      case 'en':
        ogTitle.setAttribute('content', 'Free Burnout Test | SAMEBI');
        break;
      case 'es':
        ogTitle.setAttribute('content', 'Test de Burnout Gratuito | SAMEBI');
        break;
    }
  }

  // Update Open Graph description
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    switch (language) {
      case 'de':
        ogDescription.setAttribute('content', 'Entdecken Sie Ihr Burnout-Risiko mit unserem wissenschaftlich validierten Test. Sofortige Ergebnisse und personalisierte Empfehlungen.');
        break;
      case 'en':
        ogDescription.setAttribute('content', 'Discover your burnout risk with our scientifically validated test. Immediate results and personalized recommendations.');
        break;
      case 'es':
        ogDescription.setAttribute('content', 'Descubre tu nivel de burnout con nuestro test científicamente validado. Resultados inmediatos y recomendaciones personalizadas.');
        break;
    }
  }

  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', `https://${currentConfig.domain}`);
  }
};
