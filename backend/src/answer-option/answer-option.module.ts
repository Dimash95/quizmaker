import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerOptionService } from './answer-option.service';
import { AnswerOptionController } from './answer-option.controller';
import { AnswerOption } from './entities/answer-option.entity';
import { Question } from 'src/question/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnswerOption, Question])],
  controllers: [AnswerOptionController],
  providers: [AnswerOptionService],
})
export class AnswerOptionModule {}
