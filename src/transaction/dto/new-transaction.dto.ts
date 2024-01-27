import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class NewTransactionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  amount: string;
}
