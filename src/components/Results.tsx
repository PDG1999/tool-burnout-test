import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useTranslation from '@/hooks/useTranslation';
import { useBurnoutTest } from '@/hooks/useBurnoutTest';
import { trackTestCompleted, trackPdfDownloaded, trackUpsellClicked } from '@/utils/analytics';
import { getScoreColor, getScorePercentage } from '@/utils/scoring';

const Results: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { result, resetTest } = useBurnoutTest();
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait a bit to see if result loads from localStorage
    const timer = setTimeout(() => {
      if (!result) {
        console.log('No result found, redirecting to home');
        navigate('/');
        return;
      }
      setIsLoading(false);
      // Track test completion
      trackTestCompleted(result.scores, result.level.level);
    }, 2000); // Increased timeout to 2 seconds

    return () => clearTimeout(timer);
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
      alert(t('common.pdfDownloadComingSoon') || 'PDF-Download wird implementiert...');
    }, 2000);
  };

  const handleShareResults = () => {
    if (navigator.share) {
      navigator.share({
        title: t('results.shareTitle') || 'Meine Burnout-Test Ergebnisse',
        text: `${t('results.shareText') || 'Mein Burnout-Level'}: ${result?.level.description}`,
        url: window.location.href
      });
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert(t('results.linkCopied') || 'Link wurde in die Zwischenablage kopiert!');
    }
  };

  const handlePremiumUpsell = () => {
    trackUpsellClicked('premium_analysis');
    navigate('/email');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t('results.noResultsFound') || 'Keine Ergebnisse gefunden'}
          </h1>
          <p className="text-gray-600 mb-6">
            {t('results.noResultsDescription') || 'Es wurden keine Testergebnisse gefunden. Bitte starten Sie den Test erneut.'}
          </p>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            {t('test.startTest') || 'Test starten'}
          </button>
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
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{recommendation}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Premium Upsell */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="card bg-gradient-to-r from-red-50 to-orange-50 border-red-200 mb-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t('results.premiumTitle') || '💎 Vertiefende Analyse für 19€'}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('results.premiumDescription') || 'Erhalten Sie eine detaillierte, von Psychologen geprüfte Analyse mit personalisierten Empfehlungen'}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6 text-left">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{t('results.premiumFeature1') || '10-seitige detaillierte Analyse'}</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{t('results.premiumFeature2') || 'Von Psychologen geprüft'}</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{t('results.premiumFeature3') || 'Personalisierte Handlungsempfehlungen'}</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{t('results.premiumFeature4') || 'PDF-Report zum Download'}</span>
              </div>
            </div>

            <button
              onClick={handlePremiumUpsell}
              className="btn-primary text-lg px-8 py-4 mb-4"
            >
              {t('results.premiumButton') || '💎 Jetzt für 19€ buchen'}
            </button>
            
            <p className="text-sm text-gray-500">
              {t('results.premiumGuarantee') || '✅ 30-Tage Geld-zurück-Garantie • ✅ Sofortiger Zugang'}
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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
                {t('results.generatingPdf') || 'Generiere PDF...'}
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
            {t('results.newTest') || 'Neuer Test'}
          </button>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="card bg-gradient-to-r from-green-50 to-blue-50 border-green-200"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('results.nextStepsTitle') || '🎯 Nächste Schritte'}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t('results.forYou') || 'Für Sie:'}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• {t('results.nextStep1') || 'Implementieren Sie die Empfehlungen'}</li>
                  <li>• {t('results.nextStep2') || 'Überwachen Sie Ihre Fortschritte'}</li>
                  <li>• {t('results.nextStep3') || 'Testen Sie sich regelmäßig'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t('results.professionalHelp') || 'Professionelle Hilfe:'}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• {t('results.profHelp1') || 'Suchen Sie einen Psychologen auf'}</li>
                  <li>• {t('results.profHelp2') || 'Nutzen Sie unsere Partner-Netzwerke'}</li>
                  <li>• {t('results.profHelp3') || 'Buchen Sie eine Beratung'}</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;
