import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import { AnswerOption } from 'src/answer-option/entities/answer-option.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  type: 'single' | 'multiple' | 'text';

  @Column({ default: 1 })
  score: number;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions, { onDelete: 'CASCADE' })
  quiz: Quiz;

  @OneToMany(() => AnswerOption, (option) => option.question, { cascade: true })
  answerOptions: AnswerOption[];
}
