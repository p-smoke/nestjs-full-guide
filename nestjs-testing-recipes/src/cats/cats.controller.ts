import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Cat as CatModel } from '@prisma/client';
import { CatsService } from './cats.service';
import { CreateCatDTO } from './dto/create-cat.dto';
import { UpdateCatDTO } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async getCats(@Query('name') name?: string): Promise<CatModel[]> {
    return this.catsService.getAll(name);
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<CatModel> {
    return this.catsService.getOne(id);
  }

  @Post('/')
  async newCat(@Body() cat: CreateCatDTO): Promise<CatModel> {
    return this.catsService.insertOne(cat);
  }

  @Patch('/:id')
  async updateCat(
    @Param('id') id: string,
    @Body() cat: UpdateCatDTO,
  ): Promise<CatModel> {
    return this.catsService.updateOne(id, cat);
  }

  @Delete('/:id')
  async deleteCat(@Param('id') id: string): Promise<{ deleted: boolean }> {
    return this.catsService.deleteOne(id);
  }
}
