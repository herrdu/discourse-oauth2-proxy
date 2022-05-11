import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getAccessToken(postData: {
    grant_type: string;
    code: string;
    app_id: string;
    app_secret: string;
  }): Observable<AxiosResponse<Object>> {
    return this.httpService
      .post('https://open.feishu.cn/open-apis/authen/v1/access_token', postData)
      .pipe(map((response) => response.data));
  }
}
