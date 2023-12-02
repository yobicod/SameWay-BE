import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { lastValueFrom, map, Observable } from 'rxjs';

@Injectable()
export class HttpWrapperService {
  constructor(private httpService: HttpService) {}

  public async get<T = any>(
    url: string,
    headers?: Record<string, any>,
    params?: Record<string, any>,
  ): Promise<T> {
    const observeResult: Observable<AxiosResponse<T>> = this.httpService
      .get(url, { headers, params })
      .pipe(map((response: AxiosResponse) => response));
    const result: AxiosResponse<T> = await lastValueFrom(observeResult);
    return result.data;
  }

  public async post<T = any>(
    url: string,
    body?: Record<string, any> | string,
    headers?: Record<string, any>,
  ): Promise<T> {
    const observeResult: Observable<AxiosResponse<any>> = this.httpService
      .post(url, body, { headers })
      .pipe(map((response: AxiosResponse) => response));
    const result: AxiosResponse<any> = await lastValueFrom(observeResult);
    return result.data;
  }

  public async patch(
    url: string,
    body?: Record<string, any>,
    headers?: Record<string, any>,
  ): Promise<any> {
    const observeResult: Observable<AxiosResponse<any>> = this.httpService
      .patch(url, body, { headers })
      .pipe(map((response: AxiosResponse) => response));
    const result: AxiosResponse<any> = await lastValueFrom(observeResult);
    return result.data;
  }

  public async put(
    url: string,
    body?: Record<string, any>,
    headers?: Record<string, any>,
  ): Promise<any> {
    const observeResult: Observable<AxiosResponse<any>> = this.httpService
      .put(url, body, { headers })
      .pipe(map((response: AxiosResponse) => response));
    const result: AxiosResponse<any> = await lastValueFrom(observeResult);
    return result.data;
  }

  public async delete(
    url: string,
    headers?: Record<string, any>,
  ): Promise<Record<string, any>> {
    const observeResult: Observable<AxiosResponse<any>> = this.httpService
      .delete(url, { headers })
      .pipe(map((response: AxiosResponse) => response));
    const result: AxiosResponse<any> = await lastValueFrom(observeResult);
    return result.data;
  }
}
