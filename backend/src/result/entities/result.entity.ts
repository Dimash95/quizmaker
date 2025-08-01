// src/result/entities/result.entity.ts
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

  @Column({ nullable: true })
  correctAnswersCount: number;

  @Column({ nullable: true })
  wrongAnswersCount: number;

  @CreateDateColumn()
  completedAt: Date;

  @ManyToOne(() => Quiz, (quiz) => quiz.results, { onDelete: 'CASCADE' })
  quiz: Quiz;
}
