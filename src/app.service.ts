import { Injectable } from '@nestjs/common';
import { request } from '../utils/requestDto';
//@ts-ignore
import EthereumQRPlugin = require('ethereum-qr-code');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async generateQr(requestDto: request) {
    const { tokenAddress, to, amount } = requestDto;

    try {
      console.log('before the initialization')
      // Create an instance of EthereumQRPlugin
      const qr:EthereumQRPlugin = new EthereumQRPlugin();
      console.log('after the initialization');

      // Define the data object for the transfer function of the ERC20 contract
      const data = 
        {
          "to": tokenAddress,
          "from": "0xsenderaddress",
          "value": 0,
          "gas": 100000,
          "mode": "contract_function",
          "functionSignature": {
            "name": "transfer",
            "payable": false,
            "args": [
              {
                "name": "to",
                "type": "address"
              },
              {
                "name": "value",
                "type": "uint"
              }
            ]
          },
          "argsDefaults": [
            {
              "name": "to",
              "value": to
            },
            {
              "name": "value",
              "value": amount
            }
          ]
        }
      console.log('before the qr code generation');

      // Generate QR code using the provided data object
      const qrCode = await qr.toDataUrl(data);

      return qrCode;
    } catch (error) {
      throw new Error('QR code generation failed');
    }
  }
}
