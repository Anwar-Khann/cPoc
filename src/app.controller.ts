import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { request } from '../utils/requestDto';

@Controller('transaction')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()

  async generateQr(@Body() requestDto: request) {
    // const{tokenAddress,to,amount} = requestDto;
     await this.appService.generateQr(requestDto);
  }

}
