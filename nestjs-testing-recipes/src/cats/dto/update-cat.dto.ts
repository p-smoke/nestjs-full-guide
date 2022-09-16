import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDTO } from './create-cat.dto';

export class UpdateCatDTO extends PartialType(CreateCatDTO) {}
