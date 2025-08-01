import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Question } from 'src/question/entities/question.entity';

@Entity()
export class AnswerOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ default: false })
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.answerOptions, {
    onDelete: 'CASCADE',
  })
  question: Question;
}
