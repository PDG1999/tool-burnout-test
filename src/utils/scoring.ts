import { BurnoutAnswer, BurnoutScores, BurnoutLevel, BurnoutResult } from '@/types/burnout';
import { MBI_QUESTIONS } from '@/data/mbi-questions';

export const calculateBurnoutScores = (answers: BurnoutAnswer[]): BurnoutScores => {
  const emotionalExhaustion = calculateDimensionScore(answers, 'emotional_exhaustion');
  const depersonalization = calculateDimensionScore(answers, 'depersonalization');
  const personalAccomplishment = calculateDimensionScore(answers, 'personal_accomplishment');
  
  const totalScore = emotionalExhaustion + depersonalization + personalAccomplishment;
  
  return {
    emotionalExhaustion,
    depersonalization,
    personalAccomplishment,
    totalScore
  };
};

const calculateDimensionScore = (answers: BurnoutAnswer[], dimension: string): number => {
  const dimensionQuestions = MBI_QUESTIONS.filter(q => q.dimension === dimension);
  let totalScore = 0;
  
  for (const question of dimensionQuestions) {
    const answer = answers.find(a => a.questionId === question.id);
    if (answer) {
      // For reverse-scored items, subtract from 6
      const score = question.reverse ? (6 - answer.score) : answer.score;
      totalScore += score;
    }
  }
  
  return totalScore;
};

export const determineBurnoutLevel = (scores: BurnoutScores): BurnoutLevel => {
  const { emotionalExhaustion, depersonalization, personalAccomplishment } = scores;
  
  // MBI scoring thresholds
  const eeHigh = emotionalExhaustion >= 27;
  const dpHigh = depersonalization >= 13;
  const paLow = personalAccomplishment <= 33;
  
  // Determine level based on MBI criteria
  if (eeHigh && dpHigh && paLow) {
    return {
      level: 'critical',
      color: 'red',
      description: 'Critical Burnout Risk',
      recommendations: [
        'Immediate professional intervention required',
        'Consider taking medical leave',
        'Seek specialized burnout treatment',
        'Implement comprehensive recovery plan'
      ]
    };
  } else if (eeHigh && (dpHigh || paLow)) {
    return {
      level: 'high',
      color: 'orange',
      description: 'High Burnout Risk',
      recommendations: [
        'Urgent stress management intervention needed',
        'Consider reducing workload immediately',
        'Seek professional counseling',
        'Implement daily stress reduction techniques'
      ]
    };
  } else if (eeHigh || dpHigh || paLow) {
    return {
      level: 'moderate',
      color: 'yellow',
      description: 'Moderate Burnout Risk',
      recommendations: [
        'Implement preventive stress management strategies',
        'Review work-life balance',
        'Consider professional development',
        'Regular self-care practices'
      ]
    };
  } else {
    return {
      level: 'low',
      color: 'green',
      description: 'Low Burnout Risk',
      recommendations: [
        'Maintain current healthy practices',
        'Continue regular self-monitoring',
        'Focus on prevention strategies',
        'Support colleagues who may be struggling'
      ]
    };
  }
};

export const generateBurnoutResult = (answers: BurnoutAnswer[], sessionId: string): BurnoutResult => {
  const scores = calculateBurnoutScores(answers);
  const level = determineBurnoutLevel(scores);
  
  return {
    scores,
    level,
    timestamp: new Date(),
    sessionId
  };
};

export const getScoreColor = (level: string): string => {
  switch (level) {
    case 'low': return 'score-low';
    case 'moderate': return 'score-moderate';
    case 'high': return 'score-high';
    case 'critical': return 'score-critical';
    default: return 'score-low';
  }
};

export const getScorePercentage = (scores: BurnoutScores): number => {
  // Calculate percentage based on maximum possible scores
  const maxEE = 54; // 9 questions * 6 points
  const maxDP = 30; // 5 questions * 6 points
  const maxPA = 48; // 8 questions * 6 points (reverse scored)
  
  const totalMax = maxEE + maxDP + maxPA;
  const actualTotal = scores.emotionalExhaustion + scores.depersonalization + scores.personalAccomplishment;
  
  return Math.round((actualTotal / totalMax) * 100);
};
