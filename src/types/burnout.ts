export interface BurnoutQuestion {
  id: string;
  text: string;
  dimension: 'emotional_exhaustion' | 'depersonalization' | 'personal_accomplishment';
  reverse: boolean; // For reverse-scored items
}

export interface BurnoutAnswer {
  questionId: string;
  score: number; // 0-6 scale
}

export interface BurnoutScores {
  emotionalExhaustion: number;
  depersonalization: number;
  personalAccomplishment: number;
  totalScore: number;
}

export interface BurnoutLevel {
  level: 'low' | 'moderate' | 'high' | 'critical';
  color: string;
  description: string;
  recommendations: string[];
}

export interface BurnoutResult {
  scores: BurnoutScores;
  level: BurnoutLevel;
  timestamp: Date;
  sessionId: string;
}

export interface UserSession {
  id: string;
  startTime: Date;
  endTime?: Date;
  answers: BurnoutAnswer[];
  result?: BurnoutResult;
  email?: string;
}
