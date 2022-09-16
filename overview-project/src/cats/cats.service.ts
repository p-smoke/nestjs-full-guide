import { Injectable } from '@nestjs/common';
import { CreateCatDto, FilterCatsDto, UpdateCatDto } from './dtos';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  findAll(query: FilterCatsDto) {
    const limit = query.limit;
    let cats = this.cats;
    if (limit) {
      cats = cats.slice(0, limit);
    }
    return { data: cats };
  }

  findOne(id: number) {
    const cat = this.cats.find((cat) => cat.id === id);
    return { data: cat };
  }

  create(newCat: CreateCatDto) {
    const cat = { id: this.cats.length, ...newCat };
    this.cats.push(cat);
    return { data: cat };
  }

  updateOne(id: number, updatedCat: UpdateCatDto) {
    let oldCat = this.cats.find((cat) => cat.id === id);
    oldCat = { ...updatedCat };
    return { data: oldCat };
  }

  deleteOne(id: number) {
    this.cats = this.cats.filter((cat) => cat.id !== id);
    return;
  }
}
