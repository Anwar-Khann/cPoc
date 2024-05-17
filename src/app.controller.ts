import { Body, Controller, Get, Post, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { request,crypoVerse } from '../utils/requestDto';

@Controller('transaction')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post('demo')
  // async generateQrr(@Body() requestDto: request, @Res() res:any) {
  //   try {
  //     const qrCode = await this.appService.generateQr(requestDto);
  //     res.json(qrCode);
  //   } catch (error) {
  //     res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'QR code generation failed' });
  //   }
  // }

  @Post()
  async generateCryptoVersee(@Body() requestDto: crypoVerse, @Res() res:any) {
    try {
      const qrCode = await this.appService.generateCryptoVerse(requestDto);
      res.json(qrCode);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'QR code generation failed' });
    }
  }
}
