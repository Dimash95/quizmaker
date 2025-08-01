import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from './entities/result.entity';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(Result)
    private resultRepo: Repository<Result>,
    @InjectRepository(Quiz)
    private quizRepo: Repository<Quiz>,
  ) {}

  async getTopUsers(limit = 10) {
    return this.resultRepo
      .createQueryBuilder('result')
      .select('result.userName', 'userName')
      .addSelect('SUM(result.score)', 'totalScore')
      .groupBy('result.userName')
      .orderBy('totalScore', 'DESC')
      .limit(limit)
      .getRawMany();
  }

  async create(createResultDto: CreateResultDto): Promise<Result> {
    const quiz = await this.quizRepo.findOne({
      where: { id: createResultDto.quiz.id },
    });

    if (!quiz) {
      throw new Error(`Quiz with id ${createResultDto.quiz.id} not found`);
    }

    const result = this.resultRepo.create({
      userName: createResultDto.userName,
      score: createResultDto.score,
      correctAnswersCount: createResultDto.correctAnswersCount,
      wrongAnswersCount: createResultDto.wrongAnswersCount,
      quiz,
    });

    return this.resultRepo.save(result);
  }

  findAll(): Promise<Result[]> {
    return this.resultRepo.find({
      relations: ['quiz'],
    });
  }

  findOne(id: number): Promise<Result | null> {
    return this.resultRepo.findOne({
      where: { id },
      relations: ['quiz'],
    });
  }

  update(id: number, dto: UpdateResultDto) {
    return this.resultRepo.update(id, dto);
  }

  remove(id: number) {
    return this.resultRepo.delete(id);
  }

  async getTopByQuiz(quizId: number): Promise<Result[]> {
    return this.resultRepo.find({
      where: { quiz: { id: quizId } },
      order: { score: 'DESC' },
      take: 10,
    });
  }
}
