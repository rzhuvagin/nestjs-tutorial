import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { NewTransactionDto, TransactionDto } from './dto';
import { TransactionService } from './transaction.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('transaction')
@UseGuards(AuthGuard())
export class TransactionController {
  constructor(private readonly _transactionService: TransactionService) {}

  @Post('create')
  create(@Body() dto: NewTransactionDto) {
    return this._transactionService.create(dto);
  }

  @Get('list')
  list() {
    return this._transactionService.signin(dto);
  }
}
