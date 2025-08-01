import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Quiz } from 'src/quiz/entities/quiz.entity';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  score: number;

  @CreateDateColumn()
  completedAt: Date;

  @ManyToOne(() => Quiz, (quiz) => quiz.results, { onDelete: 'CASCADE' })
  quiz: Quiz;
}
