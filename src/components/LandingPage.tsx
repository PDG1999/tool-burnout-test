import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useTranslation from '@/hooks/useTranslation';
import { trackTestStarted } from '@/utils/analytics';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();

  const handleStartTest = () => {
    trackTestStarted();
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">SAMEBI</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/privacy" className="text-gray-500 hover:text-gray-900">
                {t('nav.privacy')}
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-900">
                {t('nav.terms')}
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              🔥 Kostenloser Burnout-Test 2024
            </h1>
            <p className="text-xl text-primary-600 font-semibold mb-4">
              Wissenschaftlich validiert (MBI) • 5 Minuten • Sofortige Ergebnisse
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Entdecken Sie Ihr Burnout-Risiko mit unserem professionellen, wissenschaftlich fundierten Test. 
              <strong> Kostenlos, vertraulich und sofort verfügbar.</strong> Über 50.000 Menschen haben bereits getestet!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Link
              to="/test"
              onClick={handleStartTest}
              className="btn-primary text-lg px-8 py-4 inline-block text-xl font-semibold"
            >
              🚀 Jetzt kostenlos testen
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              ✅ Keine Anmeldung erforderlich • ✅ 100% vertraulich • ✅ Sofortige Ergebnisse
            </p>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">50.000+</div>
                <div className="text-sm">Tests durchgeführt</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">4.8/5</div>
                <div className="text-sm">Nutzerbewertung</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">95%</div>
                <div className="text-sm">Empfehlen weiter</div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Wissenschaftlich validiert</h3>
              <p className="text-sm text-gray-600">Basierend auf dem Maslach Burnout Inventory (MBI)</p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sofortige Ergebnisse</h3>
              <p className="text-sm text-gray-600">Keine Wartezeit - Ergebnisse in Sekunden</p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Personalisierte Empfehlungen</h3>
              <p className="text-sm text-gray-600">Maßgeschneiderte Tipps für Sie</p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Vertraulich</h3>
              <p className="text-sm text-gray-600">Ihre Daten sind sicher und anonym</p>
            </div>
          </motion.div>

          {/* Test Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Über den Test</h2>
            <div className="text-left space-y-4 text-gray-600">
              <p>
                <strong>22 wissenschaftlich validierte Fragen</strong> basierend auf dem Maslach Burnout Inventory (MBI)
              </p>
              <p>
                <strong>3 Burnout-Dimensionen:</strong> Emotionale Erschöpfung, Depersonalisation, Persönliche Leistungsfähigkeit
              </p>
              <p>
                <strong>Dauer:</strong> Ca. 5 Minuten
              </p>
              <p>
                <strong>Ergebnis:</strong> Sofortige Auswertung mit personalisierten Empfehlungen
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Bereit für den Test?
            </h2>
            <p className="text-gray-600 mb-6">
              Entdecken Sie Ihr Burnout-Risiko in nur 5 Minuten. Kostenlos, vertraulich und sofort verfügbar.
            </p>
            <Link
              to="/test"
              onClick={handleStartTest}
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              🚀 Jetzt kostenlos testen
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 SAMEBI. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
