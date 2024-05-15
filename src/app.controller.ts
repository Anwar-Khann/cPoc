import { Body, Controller, Get, Post, HttpStatus, Res } from '@nestjs/common';
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
  async generateQrr(@Body() requestDto: request, @Res() res:any) {
    try {
      const qrCode = await this.appService.generateQr(requestDto);
      res.json(qrCode);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'QR code generation failed' });
    }
  }
}
