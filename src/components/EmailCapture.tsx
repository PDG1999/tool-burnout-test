import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useTranslation from '@/hooks/useTranslation';
import { trackEmailCaptured, trackUpsellClicked } from '@/utils/analytics';

const EmailCapture: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Bitte geben Sie Ihre E-Mail-Adresse ein.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Track email capture
      trackEmailCaptured(email);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitted(true);
    } catch (err) {
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePremiumUpsell = () => {
    trackUpsellClicked('premium_analysis');
    // TODO: Implement Stripe checkout
    alert('Stripe-Checkout wird implementiert...');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="card text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Vielen Dank!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Ihre detaillierte Burnout-Analyse wurde an <strong>{email}</strong> gesendet.
            </p>
            <p className="text-gray-500 mb-8">
              Bitte überprüfen Sie auch Ihren Spam-Ordner, falls Sie die E-Mail nicht erhalten.
            </p>
            
            {/* Premium Upsell */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                💎 Vertiefende Analyse für 19€
              </h3>
              <p className="text-gray-600 mb-4">
                Erhalten Sie eine detaillierte, von Psychologen geprüfte Analyse mit personalisierten Empfehlungen
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6 text-left text-sm">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">10-seitige detaillierte Analyse</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Von Psychologen geprüft</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Personalisierte Handlungsempfehlungen</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">PDF-Report zum Download</span>
                </div>
              </div>

              <button
                onClick={handlePremiumUpsell}
                className="btn-primary text-lg px-8 py-4 mb-4"
              >
                💎 Jetzt für 19€ buchen
              </button>
              
              <p className="text-sm text-gray-500">
                ✅ 30-Tage Geld-zurück-Garantie • ✅ Sofortiger Zugang
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="btn-primary"
              >
                Zurück zur Startseite
              </button>
              <button
                onClick={() => navigate('/results')}
                className="btn-outline"
              >
                Ergebnisse erneut anzeigen
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              💎 Vertiefende Burnout-Analyse
            </h1>
            <p className="text-lg text-gray-600">
              Erhalten Sie eine detaillierte, von Psychologen geprüfte Analyse mit personalisierten Empfehlungen
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Was Sie erhalten:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">10-seitige detaillierte Analyse</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Von Psychologen geprüft</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Personalisierte Handlungsempfehlungen</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">PDF-Report zum Download</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Sofortiger Zugang nach Zahlung</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">30-Tage Geld-zurück-Garantie</span>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-200 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">19€</div>
              <div className="text-gray-600 mb-4">Einmalzahlung • Sofortiger Zugang</div>
              <div className="text-sm text-gray-500">
                ✅ 30-Tage Geld-zurück-Garantie • ✅ Sichere Zahlung • ✅ Sofortiger Zugang
              </div>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail-Adresse für die Analyse
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ihre@email.de"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                disabled={isSubmitting}
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !email}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                isSubmitting || !email
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'btn-primary'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Wird gesendet...
                </div>
              ) : (
                '💎 Jetzt für 19€ buchen'
              )}
            </button>
          </form>

          {/* Privacy Notice */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              {t('email.privacy')}
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/results')}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              ← Zurück zu den Ergebnissen
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmailCapture;
