import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  async posts(params): Promise<Post[]> {
    let { skip, take } = params;
    take = parseInt(take, 10) ? parseInt(take, 10) : undefined;
    skip = parseInt(skip, 10) ? parseInt(take, 10) : undefined;
    // console.log({ skip, take, cursor, where, orderBy });
    return await this.prismaService.post.findMany({
      skip,
      take,
    });
  }

  async post(
    postWhereUniqueInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post | null> {
    return await this.prismaService.post.findUnique({
      where: postWhereUniqueInput,
    });
  }

  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    try {
      const post = await this.prismaService.post.create({
        data,
      });
      if (post) {
        return post;
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new BadRequestException(
            'Unique constraint failed on the fields: (`title`)',
          );
        }
      }
      throw error;
    }
  }

  async updatePost(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }): Promise<Post> {
    const { data, where } = params;
    return await this.prismaService.post.update({
      data,
      where,
    });
  }

  async deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    return await this.prismaService.post.delete({
      where,
    });
  }
}
