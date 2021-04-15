import { IsNumber, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly price: number;
}
