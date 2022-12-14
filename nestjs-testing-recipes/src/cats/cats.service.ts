import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Cat } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCatDTO } from './dto/create-cat.dto';
import { UpdateCatDTO } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(name?: string | undefined): Promise<Cat[]> {
    if (name) {
      return this.prisma.cat.findMany({
        where: { name },
      });
    }

    return this.prisma.cat.findMany();
  }

  async getOne(id: string): Promise<Cat> {
    return this.prisma.cat.findUnique({
      where: { id },
    });
  }

  async insertOne(cat: CreateCatDTO): Promise<Cat> {
    return this.prisma.cat.create({
      data: cat,
    });
  }

  async updateOne(id: string, cat: UpdateCatDTO): Promise<Cat> {
    return this.prisma.cat.update({
      data: cat,
      where: { id },
    });
  }

  async deleteOne(id: string): Promise<{ deleted: boolean; message?: string }> {
    try {
      await this.prisma.cat.delete({ where: { id } });
      return { deleted: true };
    } catch (err) {
      return { deleted: false, message: err.message };
    }
  }
}
