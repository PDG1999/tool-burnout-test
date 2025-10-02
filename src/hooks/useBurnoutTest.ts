import { useState, useCallback } from 'react';
import { BurnoutAnswer, BurnoutResult, UserSession } from '@/types/burnout';
import { generateBurnoutResult } from '@/utils/scoring';
import { MBI_QUESTIONS } from '@/data/mbi-questions';

export const useBurnoutTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<BurnoutAnswer[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<BurnoutResult | null>(null);
  const [session, setSession] = useState<UserSession | null>(null);

  const totalQuestions = MBI_QUESTIONS.length;
  const currentQuestion = MBI_QUESTIONS[currentQuestionIndex];

  const startTest = useCallback(() => {
    const newSession: UserSession = {
      id: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      startTime: new Date(),
      answers: []
    };
    setSession(newSession);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsCompleted(false);
    setResult(null);
  }, []);

  const answerQuestion = useCallback((questionId: string, score: number) => {
    const newAnswer: BurnoutAnswer = { questionId, score };
    
    setAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== questionId);
      return [...filtered, newAnswer];
    });
  }, []);

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [currentQuestionIndex, totalQuestions]);

  const previousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const completeTest = useCallback(() => {
    if (!session) return;
    
    const burnoutResult = generateBurnoutResult(answers, session.id);
    setResult(burnoutResult);
    setIsCompleted(true);
    
    // Update session with result
    setSession(prev => prev ? {
      ...prev,
      endTime: new Date(),
      result: burnoutResult
    } : null);
  }, [answers, session]);

  const resetTest = useCallback(() => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsCompleted(false);
    setResult(null);
    setSession(null);
  }, []);

  const getCurrentAnswer = useCallback((questionId: string): number | undefined => {
    const answer = answers.find(a => a.questionId === questionId);
    return answer?.score;
  }, [answers]);

  const progress = totalQuestions > 0 ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;
  const canProceed = getCurrentAnswer(currentQuestion?.id) !== undefined;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return {
    // State
    currentQuestionIndex,
    currentQuestion,
    totalQuestions,
    answers,
    isCompleted,
    result,
    session,
    progress,
    canProceed,
    isLastQuestion,
    
    // Actions
    startTest,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    completeTest,
    resetTest,
    getCurrentAnswer
  };
};
