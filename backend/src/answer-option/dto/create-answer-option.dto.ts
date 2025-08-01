export class CreateAnswerOptionDto {
  text: string;
  isCorrect: boolean;
  question: { id: number };
}
