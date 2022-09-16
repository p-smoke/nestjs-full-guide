import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Header,
  Param,
  ParseFilePipe,
  ParseIntPipe,
  Post,
  Res,
  StreamableFile,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { Express, Response } from 'express';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { createReadStream } from 'fs';
import { join } from 'path';

const uploadedFiles = [];

@UseGuards(JwtGuard)
@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.users({});
  }

  @Get(':id/posts')
  async getUserPosts(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserPosts({ id: Number(id) });
  }

  @Get('upload/:id')
  async downloadFiles(
    @Param('id') id: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const file = uploadedFiles.find((f) => f.id === id);

    const stream = createReadStream(join(process.cwd(), file.path));

    response.set({
      'Content-Disposition': `inline; filename="${file.filename}"`,
      'Content-Type': `${file.mimetype}`,
    });

    return new StreamableFile(stream);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  // {
  //   storage: diskStorage({
  //     destination: './uploads',
  //   }),
  // }
  async uploadFile(
    @GetUser('email') userEmail: string,
    @UploadedFile(ParseFilePipe) file: Express.Multer.File,
  ) {
    return this.userService.uploadFile(
      userEmail,
      file.buffer,
      file.originalname,
    );
  }
}
