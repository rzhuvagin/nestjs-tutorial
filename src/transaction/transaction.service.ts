import { ForbiddenException, Inject, Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt/dist';
import { verify } from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewTransactionDto, TransactionDto } from './dto';
import { REQUEST } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST })
export class TransactionService {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    private readonly _prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async create(dto: NewTransactionDto) {}

  async getList() {
    // const user = this.request.user;
    // const user = await this._prismaService.user.findUnique({
    //   where: { email: dto.email },
    // });
    // if (!user) {
    //   throw new ForbiddenException('User does not exist');
    // }
    //
    // return await this._prismaService.transaction.findMany({ where: {userId === user.Id}});
  }
}
