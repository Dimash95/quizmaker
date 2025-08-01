import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultService } from './result.service';
import { ResultController } from './result.controller';
import { Result } from './entities/result.entity';
import { Quiz } from 'src/quiz/entities/quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Result, Quiz])],
  controllers: [ResultController],
  providers: [ResultService],
})
export class ResultModule {}
