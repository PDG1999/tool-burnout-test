import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useTranslation from '@/hooks/useTranslation';
import { useBurnoutTest } from '@/hooks/useBurnoutTest';
import { trackQuestionAnswered } from '@/utils/analytics';
import { SCALE_LABELS } from '@/data/mbi-questions';

const BurnoutTest: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    canProceed,
    isLastQuestion,
    startTest,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    completeTest,
    getCurrentAnswer
  } = useBurnoutTest();

  useEffect(() => {
    // Start test when component mounts
    startTest();
  }, [startTest]);

  const handleAnswerChange = (score: number) => {
    if (currentQuestion) {
      answerQuestion(currentQuestion.id, score);
      trackQuestionAnswered(currentQuestion.id, currentQuestionIndex + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      completeTest();
      navigate('/results');
    } else {
      nextQuestion();
    }
  };

  const handlePrevious = () => {
    previousQuestion();
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  const currentAnswer = getCurrentAnswer(currentQuestion.id);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t('test.title')}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {t('test.subtitle')}
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          <p className="text-sm text-gray-500">
            Frage {currentQuestionIndex + 1} von {totalQuestions}
          </p>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="question-card"
          >
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {currentQuestion.text}
              </h2>
              
              <p className="text-sm text-gray-500 mb-6">
                Bitte wählen Sie die Antwort, die am besten zu Ihrer Erfahrung in den letzten 12 Monaten passt:
              </p>
            </div>

            {/* Answer Options */}
            <div className="space-y-3 mb-8">
              {Object.entries(SCALE_LABELS).map(([score, label]) => (
                <label
                  key={score}
                  className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    currentAnswer === parseInt(score)
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question_${currentQuestion.id}`}
                    value={score}
                    checked={currentAnswer === parseInt(score)}
                    onChange={() => handleAnswerChange(parseInt(score))}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                    currentAnswer === parseInt(score)
                      ? 'border-primary-500 bg-primary-500'
                      : 'border-gray-300'
                  }`}>
                    {currentAnswer === parseInt(score) && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{score}</div>
                    <div className="text-sm text-gray-600">{label}</div>
                  </div>
                </label>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  currentQuestionIndex === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t('test.backButton')}
              </button>

              <button
                onClick={handleNext}
                disabled={!canProceed}
                className={`px-8 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  canProceed
                    ? 'btn-primary'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isLastQuestion ? t('test.submitButton') : t('test.nextButton')}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Alle Antworten sind vertraulich und werden nur für die Auswertung verwendet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BurnoutTest;
