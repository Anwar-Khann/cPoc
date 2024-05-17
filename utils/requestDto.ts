interface request {
    tokenAddress:string,
    to:string,
    amount:number,
}

interface crypoVerse{
    contract : string,
    merchantId:number,
    amount:number,
    tokenAddress:string,
    processingFee:number
}

export {request,crypoVerse} ;