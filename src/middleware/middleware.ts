import { HttpStatus, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

export async function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  const token: string =
    'ya29.a0AfB_byC4jtaSEMEHWXJezYOxLT2-2rwoh2Ssin87EuvckIQruIfegK5FlKGnBh7aXFOt0h8q2MXEE4lvyLEnZb8txW2jSbQ8ujf-TfHEOhWzxK-ukFO5wnf5yD8ytkswFZIGTrVfMzRSXyzm07vQ-Yq9Er0Za3L3up3waCgYKAX0SARMSFQHGX2MiPQr4156W2t3otzTbZUHi_Q0171';
  try {
    const verifyToken = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`,
    );

    if (verifyToken.status === HttpStatus.OK) {
      next();
    }
    throw new InternalServerErrorException('Invalid access token');
  } catch (error) {
    console.log('🚀 ~ file: middleware.ts:12 ~ logger ~ error:', error);
    throw new InternalServerErrorException(
      'Google oAut2 - Internal server error',
    );
  }

  next();
}
