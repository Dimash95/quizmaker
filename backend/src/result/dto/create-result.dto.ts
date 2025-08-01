import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

class QuizIdDto {
  @IsNumber({}, { message: 'ID должен быть числом' })
  id: number;
}

export class CreateResultDto {
  @IsNotEmpty()
  userName: string;

  @IsNumber()
  score: number;

  @IsOptional()
  @IsInt()
  correctAnswersCount: number;

  @IsOptional()
  @IsInt()
  wrongAnswersCount: number;

  @ValidateNested()
  @Type(() => QuizIdDto)
  quiz: QuizIdDto;
}
