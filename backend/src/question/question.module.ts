import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { Question } from './entities/question.entity';
import { AnswerOption } from 'src/answer-option/entities/answer-option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, AnswerOption])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
