import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useTranslation from '@/hooks/useTranslation';
import { useBurnoutTest } from '@/hooks/useBurnoutTest';
import { trackTestCompleted, trackPdfDownloaded } from '@/utils/analytics';
import { getScoreColor, getScorePercentage } from '@/utils/scoring';

const Results: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { result, resetTest } = useBurnoutTest();
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  useEffect(() => {
    if (!result) {
      navigate('/');
      return;
    }

    // Track test completion
    trackTestCompleted(result.scores, result.level.level);
  }, [result, navigate]);

  const handleStartNewTest = () => {
    resetTest();
    navigate('/');
  };

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    trackPdfDownloaded();
    
    // TODO: Implement PDF generation
    setTimeout(() => {
      setIsGeneratingPdf(false);
      // For now, just show an alert
      alert('PDF-Download wird implementiert...');
    }, 2000);
  };

  const handleShareResults = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Meine Burnout-Test Ergebnisse',
        text: `Mein Burnout-Level: ${result?.level.description}`,
        url: window.location.href
      });
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link wurde in die Zwischenablage kopiert!');
    }
  };

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  const scorePercentage = getScorePercentage(result.scores);
  const scoreColorClass = getScoreColor(result.level.level);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('results.title')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('results.subtitle')}
          </p>
        </motion.div>

        {/* Score Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card text-center mb-8"
        >
          <div className="flex flex-col items-center">
            <div className={`score-circle ${scoreColorClass} mb-6`}>
              {scorePercentage}%
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {t(`results.level.${result.level.level}`)}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {result.level.description}
            </p>
          </div>
        </motion.div>

        {/* Detailed Scores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="card text-center">
            <h3 className="font-semibold text-gray-900 mb-2">
              {t('results.scores.emotionalExhaustion')}
            </h3>
            <div className="text-3xl font-bold text-red-600 mb-2">
              {result.scores.emotionalExhaustion}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-red-500 h-2 rounded-full"
                style={{ width: `${Math.min((result.scores.emotionalExhaustion / 54) * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          <div className="card text-center">
            <h3 className="font-semibold text-gray-900 mb-2">
              {t('results.scores.depersonalization')}
            </h3>
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {result.scores.depersonalization}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: `${Math.min((result.scores.depersonalization / 30) * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          <div className="card text-center">
            <h3 className="font-semibold text-gray-900 mb-2">
              {t('results.scores.personalAccomplishment')}
            </h3>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {result.scores.personalAccomplishment}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${Math.min((result.scores.personalAccomplishment / 48) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="card mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {t('results.recommendations.title')}
          </h3>
          <ul className="space-y-3">
            {result.level.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{recommendation}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <button
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className="btn-primary flex items-center justify-center"
          >
            {isGeneratingPdf ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Generiere PDF...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('results.downloadPdf')}
              </>
            )}
          </button>

          <button
            onClick={handleShareResults}
            className="btn-outline flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            {t('results.shareResults')}
          </button>

          <button
            onClick={handleStartNewTest}
            className="btn-secondary flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Neuer Test
          </button>
        </motion.div>

        {/* Email Capture CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="card bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Detaillierte Analyse erhalten
            </h3>
            <p className="text-gray-600 mb-4">
              Erhalten Sie eine ausführliche Auswertung und personalisierte Empfehlungen per E-Mail.
            </p>
            <button
              onClick={() => navigate('/email')}
              className="btn-primary"
            >
              Kostenlose Analyse anfordern
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;
