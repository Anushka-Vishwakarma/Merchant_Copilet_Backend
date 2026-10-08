import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopifyService {
  testConnection() {
    return {
      success: true,
      message: 'Shopify module is connected',
    };
  }
}