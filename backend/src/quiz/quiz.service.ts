import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Quiz } from './entities/quiz.entity';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}

  findByTitle(q: string) {
    return this.quizRepository.find({
      where: {
        title: ILike(`%${q}%`),
      },
    });
  }

  findByTags(tagNames: string[]) {
    return this.quizRepository
      .createQueryBuilder('quiz')
      .leftJoinAndSelect('quiz.tags', 'tag')
      .where('tag.name IN (:...tagNames)', { tagNames })
      .getMany();
  }

  async getAllPaginated(page: number, limit: number) {
    const [quizzes, total] = await this.quizRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data: quizzes,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  create(createQuizDto: CreateQuizDto) {
    return this.quizRepository.save(createQuizDto);
  }

  findAll() {
    return this.quizRepository.find();
  }

  findOne(id: number) {
    return this.quizRepository.findOne({
      where: { id },
      relations: ['questions'],
    });
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return this.quizRepository.update(id, updateQuizDto);
  }

  async remove(id: number) {
    const quiz = await this.quizRepository.findOne({
      where: { id },
      relations: ['questions', 'results'],
    });

    if (!quiz) throw new NotFoundException(`Quiz #${id} not found`);

    await this.quizRepository.remove(quiz);
  }
}
