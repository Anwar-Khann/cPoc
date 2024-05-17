import { Injectable } from '@nestjs/common';
import { request,crypoVerse } from '../utils/requestDto';
import * as EthereumQRPlugin from 'ethereum-qr-code';
import { ethers } from 'ethers';
// import * as QRCodeTerminal from 'qrcode-terminal';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


   async generateCryptoVerse(requestDto: crypoVerse) {
    const {contract, merchantId, amount, tokenAddress, processingFee } = requestDto;
    try {

   
  
    // const url = `ethereum:${contract}@${chainId}/createTransaction?value=${merchantId},${amount},${tokenAddress},${processingFee}&gas=${defaultGasLimit}&gasPrice=${defaultGasPrice}`;
   const url = `ethereum:${contract}@11155111/createTransaction?uint256=${merchantId}&uint256=${amount}&address=${tokenAddress}&uint256${processingFee}&gas=21000&gasPrice=10`
    return url;
      
    } catch (error) {
      console.error("Error generating QR Code:", error);
    }
  };

  // async generateQr(requestDto: request) {
  //   const { tokenAddress, to, amount } = requestDto;

  //   try {
  //     console.log('before the initialization')
  //     // Create an instance of EthereumQRPlugin
  //     const qr = new EthereumQRPlugin() as any;
  //     console.log('after the initialization');
  //     console.log("the instantiation",qr)

  //     // Define the data object for the transfer function of the ERC20 contract
  //     const data = 
  //       {
  //         "to": tokenAddress,
  //         "chainId": 1,
  //         "mode": "contract_function",
  //         "functionSignature": {
  //           "name": "transfer",
  //           "payable": false,
  //           "args": [
  //             {
  //               "name": "to",
  //               "type": "address"
  //             },
  //             {
  //               "name": "value",
  //               "type": "uint"
  //             }
  //           ]
  //         },
  //         "argsDefaults": [
  //           {
  //             "name": "to",
  //             "value": to
  //           },
  //           {
  //             "name": "value",
  //             "value": amount
  //           }
  //         ]
  //       };
  //     console.log('before the qr code generation');

  //     // Generate QR code using the provided data object
  //     const qrCode = await qr.toDataUrl(data);
  //     // QRCodeTerminal.generate(qrCode);
  //     console.log('after the qr code generation');

  //     return qrCode;
  //   } catch (error) {
  //     throw new Error('QR code generation failed');
  //   }
  // }
}
