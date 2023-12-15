import { HttpStatus, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

export async function logger(req: Request, res: Response, next: NextFunction) {
  try {
    const bearerToken: string = req.rawHeaders[11];
    const token: string = bearerToken.split(' ')[1];
    console.log('🚀 ~ file: middleware.ts:9 ~ logger ~ token:', token);
    const verifyToken = await axios.get(
      `${process.env.VERIFY_ACCESS_TOKEN}${token}`,
    );

    if (verifyToken.status === HttpStatus.OK) {
      next();
    }
  } catch (error) {
    console.log('🚀 ~ file: middleware.ts:12 ~ logger ~ error:', error);
    throw new UnauthorizedException('Google oAuth2.0: Unauthorized exception');
  }
}
