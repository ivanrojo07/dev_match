import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @Length(3, 100)
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  age: number;
}
