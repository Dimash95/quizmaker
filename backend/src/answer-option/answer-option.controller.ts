import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnswerOptionService } from './answer-option.service';
import { CreateAnswerOptionDto } from './dto/create-answer-option.dto';
import { UpdateAnswerOptionDto } from './dto/update-answer-option.dto';

@Controller('answer-option')
export class AnswerOptionController {
  constructor(private readonly answerOptionService: AnswerOptionService) {}

  @Post()
  create(@Body() createAnswerOptionDto: CreateAnswerOptionDto) {
    return this.answerOptionService.create(createAnswerOptionDto);
  }

  @Get()
  findAll() {
    return this.answerOptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.answerOptionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnswerOptionDto: UpdateAnswerOptionDto,
  ) {
    return this.answerOptionService.update(+id, updateAnswerOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.answerOptionService.remove(+id);
  }
}
