import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnswerOption } from './entities/answer-option.entity';
import { CreateAnswerOptionDto } from './dto/create-answer-option.dto';
import { UpdateAnswerOptionDto } from './dto/update-answer-option.dto';
import { Question } from 'src/question/entities/question.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AnswerOptionService {
  constructor(
    @InjectRepository(AnswerOption)
    private answerOptionRepo: Repository<AnswerOption>,
    @InjectRepository(Question)
    private questionRepo: Repository<Question>,
  ) {}

  async create(createDto: CreateAnswerOptionDto): Promise<AnswerOption> {
    const question = await this.questionRepo.findOne({
      where: { id: createDto.question.id },
    });

    if (!question) {
      throw new Error(`Question with id ${createDto.question.id} not found`);
    }

    // eslint-disable-next-line
    const option = plainToInstance(AnswerOption, {
      text: createDto.text,
      isCorrect: createDto.isCorrect,
      question,
    });

    return this.answerOptionRepo.save(option as AnswerOption);
  }

  findAll() {
    return this.answerOptionRepo.find({
      relations: ['question'],
    });
  }

  findOne(id: number) {
    return this.answerOptionRepo.findOne({
      where: { id },
      relations: ['question'],
    });
  }

  update(id: number, updateDto: UpdateAnswerOptionDto) {
    return this.answerOptionRepo.update(id, updateDto);
  }

  remove(id: number) {
    return this.answerOptionRepo.delete(id);
  }
}
