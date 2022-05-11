import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/feishu/access_token')
  getFeiShuToken(
    @Body()
    postData: {
      grant_type: string;
      code: string;
      client_id: string;
      client_secret: string;
    },
  ) {
    return this.appService.getAccessToken({
      grant_type: postData.grant_type,
      code: postData.code,
      app_id: postData.client_id,
      app_secret: postData.client_secret,
    });
  }
}
