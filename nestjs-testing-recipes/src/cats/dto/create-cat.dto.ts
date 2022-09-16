import { IsNotEmpty, IsNumber, IsString, Validate } from 'class-validator';
// import { OwnerExistsRule } from './owner-exists-rule';

export class CreateCatDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  breed: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  //   @Validate(OwnerExistsRule)
  ownerId: string;
}
