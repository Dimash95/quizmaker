import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizModule } from './quiz/quiz.module';
import { QuestionModule } from './question/question.module';
import { AnswerOptionModule } from './answer-option/answer-option.module';
import { ResultModule } from './result/result.module';
import { Quiz, Tag } from './quiz/entities/quiz.entity';
import { Question } from './question/entities/question.entity';
import { AnswerOption } from './answer-option/entities/answer-option.entity';
import { Result } from './result/entities/result.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'quizmaker',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Quiz, Question, AnswerOption, Result, Tag],
    }),
    QuizModule,
    QuestionModule,
    AnswerOptionModule,
    ResultModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
