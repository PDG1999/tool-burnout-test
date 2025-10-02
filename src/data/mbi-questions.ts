import { BurnoutQuestion } from '@/types/burnout';

export const MBI_QUESTIONS: BurnoutQuestion[] = [
  // Emotional Exhaustion (9 questions)
  {
    id: 'ee1',
    text: 'Ich fühle mich emotional erschöpft von meiner Arbeit',
    dimension: 'emotional_exhaustion',
    reverse: false
  },
  {
    id: 'ee2', 
    text: 'Am Ende des Arbeitstages fühle ich mich ausgelaugt',
    dimension: 'emotional_exhaustion',
    reverse: false
  },
  {
    id: 'ee3',
    text: 'Ich fühle mich morgens beim Aufstehen erschöpft und muss mich auf einen weiteren Arbeitstag einstellen',
    dimension: 'emotional_exhaustion',
    reverse: false
  },
  {
    id: 'ee4',
    text: 'Die Arbeit mit Menschen den ganzen Tag über ist für mich sehr anstrengend',
    dimension: 'emotional_exhaustion',
    reverse: false
  },
  {
    id: 'ee5',
    text: 'Ich fühle mich von meiner Arbeit ausgebrannt',
    dimension: 'emotional_exhaustion',
    reverse: false
  },
  {
    id: 'ee6',
    text: 'Ich fühle mich von meinem Job frustriert',
    dimension: 'emotional_exhaustion',
    reverse: false
  },
  {
    id: 'ee7',
    text: 'Ich fühle, dass ich zu hart an meinem Job arbeite',
    dimension: 'emotional_exhaustion',
    reverse: false
  },
  {
    id: 'ee8',
    text: 'Ich fühle mich am Ende meiner Kräfte',
    dimension: 'emotional_exhaustion',
    reverse: false
  },
  {
    id: 'ee9',
    text: 'Ich fühle mich durch meine Arbeit überfordert',
    dimension: 'emotional_exhaustion',
    reverse: false
  },

  // Depersonalization (5 questions)
  {
    id: 'dp1',
    text: 'Ich behandle manche Menschen, als wären sie unpersönliche Objekte',
    dimension: 'depersonalization',
    reverse: false
  },
  {
    id: 'dp2',
    text: 'Ich bin seit Beginn dieser Arbeit gefühlloser gegenüber Menschen geworden',
    dimension: 'depersonalization',
    reverse: false
  },
  {
    id: 'dp3',
    text: 'Ich mache mir Sorgen, dass dieser Job mich emotional verhärtet',
    dimension: 'depersonalization',
    reverse: false
  },
  {
    id: 'dp4',
    text: 'Es ist mir egal, was mit manchen Menschen passiert',
    dimension: 'depersonalization',
    reverse: false
  },
  {
    id: 'dp5',
    text: 'Ich fühle, dass Menschen mich für ihre Probleme verantwortlich machen',
    dimension: 'depersonalization',
    reverse: false
  },

  // Personal Accomplishment (8 questions)
  {
    id: 'pa1',
    text: 'Ich kann leicht verstehen, wie sich Menschen fühlen',
    dimension: 'personal_accomplishment',
    reverse: true
  },
  {
    id: 'pa2',
    text: 'Ich gehe sehr effektiv mit den Problemen von Menschen um',
    dimension: 'personal_accomplishment',
    reverse: true
  },
  {
    id: 'pa3',
    text: 'Ich fühle, dass ich das Leben anderer Menschen durch meine Arbeit positiv beeinflusse',
    dimension: 'personal_accomplishment',
    reverse: true
  },
  {
    id: 'pa4',
    text: 'Ich fühle mich sehr energievoll',
    dimension: 'personal_accomplishment',
    reverse: true
  },
  {
    id: 'pa5',
    text: 'Ich kann leicht eine entspannte Atmosphäre mit Menschen schaffen',
    dimension: 'personal_accomplishment',
    reverse: true
  },
  {
    id: 'pa6',
    text: 'Ich fühle mich begeistert, nachdem ich eng mit Menschen zusammengearbeitet habe',
    dimension: 'personal_accomplishment',
    reverse: true
  },
  {
    id: 'pa7',
    text: 'Ich habe in diesem Job viele wertvolle Dinge erreicht',
    dimension: 'personal_accomplishment',
    reverse: true
  },
  {
    id: 'pa8',
    text: 'In meiner Arbeit gehe ich sehr ruhig mit emotionalen Problemen um',
    dimension: 'personal_accomplishment',
    reverse: true
  }
];

export const SCALE_LABELS = {
  0: 'Nie',
  1: 'Ein paar Mal im Jahr oder weniger',
  2: 'Einmal im Monat oder weniger',
  3: 'Ein paar Mal im Monat',
  4: 'Einmal pro Woche',
  5: 'Ein paar Mal pro Woche',
  6: 'Jeden Tag'
};
