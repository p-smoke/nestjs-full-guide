import { IsOptional, IsInt } from 'class-validator';

export class AllPostsArgsDto {
  // @IsInt()
  @IsOptional()
  skip?: number;

  // @IsInt()
  @IsOptional()
  take?: number;

  @IsOptional()
  cursor?: any;

  @IsOptional()
  where?: any;

  @IsOptional()
  orderBy?: any;
}
