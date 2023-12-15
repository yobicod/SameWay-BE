import { InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

export async function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);

  const token: string =
    '229f4ab172ad48d56b318ceb030b1a6a7cc01cdb2425da767d81067604db4201%7C764fbfd48d2a7a0bfba622c9a815dd29b58cd53a26b694a1b0465f6024aff189';
  try {
    const verifyToken = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`,
    );
    console.log(
      '🚀 ~ file: middleware.ts:12 ~ logger ~ verifyToken:',
      verifyToken,
    );
  } catch (error) {
    console.log('🚀 ~ file: middleware.ts:12 ~ logger ~ error:', error);
    throw new InternalServerErrorException(
      'Google oAut2 - Internal server error',
    );
  }

  next();
}
