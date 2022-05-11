import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { lastValueFrom, map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getAccessToken(postData: {
    grant_type: string;
    code: string;
    app_id: string;
    app_secret: string;
  }): Promise<Object> {
    const data = await lastValueFrom(
      this.httpService
        .post(
          'https://open.feishu.cn/open-apis/authen/v1/access_token',
          postData,
        )
        .pipe(map((response) => response.data)),
    );

    console.log(data);

    return data.data;
  }
}
