import React from 'react';
import { Link } from 'react-router-dom';

import useTranslation from '@/hooks/useTranslation';
import { trackTestStarted } from '@/utils/analytics';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();

  const handleStartTest = () => {
    trackTestStarted();
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                className="h-8 w-auto"
                src="/logo.svg"
                alt="SAMEBI"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">SAMEBI</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  {t('nav.home')}
                </Link>
                <Link to="/about" className="text-gray-500 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  Über uns
                </Link>
                <Link to="/faq" className="text-gray-500 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  FAQ
                </Link>
                <Link to="/contact" className="text-gray-500 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  Kontakt
                </Link>
                <Link to="/privacy" className="text-gray-500 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  {t('nav.privacy')}
                </Link>
                <Link to="/terms" className="text-gray-500 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  {t('nav.terms')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">🔥 Kostenloser Burnout-Test 2024</span>
                  <span className="block text-red-600">Wissenschaftlich validiert</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Entdecken Sie Ihr Burnout-Risiko mit unserem professionellen, wissenschaftlich fundierten Test. 
                  <strong> Kostenlos, vertraulich und sofort verfügbar.</strong> Über 50.000 Menschen haben bereits getestet!
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/test"
                      onClick={handleStartTest}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200 md:py-4 md:text-lg md:px-10"
                    >
                      🚀 Jetzt kostenlos testen
                    </Link>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  ✅ Keine Anmeldung erforderlich • ✅ 100% vertraulich • ✅ Sofortige Ergebnisse
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-r from-red-50 to-orange-50 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">22 MBI-Fragen</h3>
              <p className="text-gray-600">Wissenschaftlich validiert</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">50.000+</div>
              <div className="text-sm">Tests durchgeführt</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">4.8/5</div>
              <div className="text-sm">Nutzerbewertung</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">95%</div>
              <div className="text-sm">Empfehlen weiter</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Warum SAMEBI?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Unser Burnout-Test basiert auf wissenschaftlichen Standards und bietet Ihnen sofortige, personalisierte Ergebnisse.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Wissenschaftlich validiert (MBI)
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Basierend auf dem Maslach Burnout Inventory - dem Goldstandard für Burnout-Assessment.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Sofortige Ergebnisse
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Keine Wartezeit - erhalten Sie Ihre Ergebnisse in Sekunden nach Testabschluss.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Personalisierte Empfehlungen
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Maßgeschneiderte Tipps und Handlungsempfehlungen basierend auf Ihren Ergebnissen.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    100% Vertraulich
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Ihre Daten werden sicher behandelt und niemals an Dritte weitergegeben.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Test Info */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Über den Test</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Was Sie erwartet:</h3>
                <ul className="space-y-2">
                  <li>• 22 wissenschaftlich validierte Fragen</li>
                  <li>• 3 Burnout-Dimensionen bewertet</li>
                  <li>• Ca. 5 Minuten Dauer</li>
                  <li>• Sofortige Auswertung</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Ihre Vorteile:</h3>
                <ul className="space-y-2">
                  <li>• Kostenlos und anonym</li>
                  <li>• Wissenschaftlich fundiert</li>
                  <li>• Personalisierte Empfehlungen</li>
                  <li>• Keine Anmeldung erforderlich</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Bereit für Ihren Burnout-Test?</span>
            <span className="block text-red-600">Starten Sie jetzt in nur 5 Minuten.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/test"
                onClick={handleStartTest}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
              >
                🚀 Jetzt kostenlos testen
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="SAMEBI" />
              <span className="ml-2 text-lg font-semibold text-gray-900">SAMEBI</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/about" className="text-gray-500 hover:text-gray-900">
                Über uns
              </Link>
              <Link to="/faq" className="text-gray-500 hover:text-gray-900">
                FAQ
              </Link>
              <Link to="/contact" className="text-gray-500 hover:text-gray-900">
                Kontakt
              </Link>
              <Link to="/privacy" className="text-gray-500 hover:text-gray-900">
                {t('nav.privacy')}
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-900">
                {t('nav.terms')}
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              © 2024 SAMEBI. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
