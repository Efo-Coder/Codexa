import { pcepQuiz } from './pcep';
import { lpiWebQuiz } from './lpi-web';
import type { Quiz } from '@/types/quiz';

export const quizzes: Quiz[] = [pcepQuiz, lpiWebQuiz];

export function getQuizById(id: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.id === id);
}
