import { Question } from 'src/question/entities/question.entity';
import { Result } from 'src/result/entities/result.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Quiz, (quiz) => quiz.tags)
  quizzes: Quiz[];
}

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Question, (question) => question.quiz, { cascade: true })
  questions: Question[];

  @OneToMany(() => Result, (result) => result.quiz, { cascade: true })
  results: Result[];

  @ManyToMany(() => Tag, (tag) => tag.quizzes, { cascade: true })
  @JoinTable()
  tags: Tag[];
}
