import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
// import { env } from 'process';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://myuser:mypassword@localhost:5432/mydb?schema=public',
        },
      },
    });
  }
}
