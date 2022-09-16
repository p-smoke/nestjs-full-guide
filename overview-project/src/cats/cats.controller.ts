import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto, FilterCatsDto, UpdateCatDto } from './dtos';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  @HttpCode(200)
  findAll(@Query() query: FilterCatsDto) {
    return this.catsService.findAll(query);
  }

  @Get('/:id')
  @HttpCode(200)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() newCat: CreateCatDto) {
    return this.catsService.create(newCat);
  }

  @Put('/:id')
  @HttpCode(200)
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedCat: UpdateCatDto,
  ) {
    return this.catsService.updateOne(id, updatedCat);
  }

  @Delete('/:id')
  @HttpCode(204)
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.deleteOne(id);
  }
}
