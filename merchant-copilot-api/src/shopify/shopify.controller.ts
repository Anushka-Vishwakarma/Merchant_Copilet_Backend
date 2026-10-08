import { Controller, Get } from '@nestjs/common';
import { ShopifyService } from './shopify.service.js';

@Controller('shopify')
export class ShopifyController {
  constructor(private readonly shopifyService: ShopifyService) {}

  @Get('test')
  test() {
    return this.shopifyService.testConnection();
  }
}