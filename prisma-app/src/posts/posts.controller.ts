import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { AllPostsArgsDto } from './dto/all-posts-args.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller()
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('')
  async getAllPosts(@Query() params: AllPostsArgsDto): Promise<PostModel[]> {
    console.log(params);
    return await this.postService.posts(params);
  }

  @Get('posts')
  async getPublishedPosts(): Promise<PostModel[]> {
    return await this.postService.posts({
      where: { published: true },
    });
  }

  @Get('posts/:id')
  async getPostById(@Param('id', ParseIntPipe) id: number): Promise<PostModel> {
    return await this.postService.post({ id: Number(id) });
  }

  @Get('filtered-posts/:searchString')
  async getFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<PostModel[]> {
    return await this.postService.posts({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });
  }

  @UseGuards(JwtGuard)
  @Post('posts')
  async createDraft(
    @GetUser('email') authorEmail: string,
    @Body() postData: CreatePostDto,
  ): Promise<PostModel> {
    const { title, content } = postData;
    return await this.postService.createPost({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    });
  }

  @UseGuards(JwtGuard)
  @Put('publish/:id')
  async publishPost(@Param('id', ParseIntPipe) id: number): Promise<PostModel> {
    return await this.postService.updatePost({
      where: { id: Number(id) },
      data: { published: true },
    });
  }

  @UseGuards(JwtGuard)
  @Delete('posts/:id')
  async deletePost(@Param('id', ParseIntPipe) id: number): Promise<PostModel> {
    return await this.postService.deletePost({ id: Number(id) });
  }
}
