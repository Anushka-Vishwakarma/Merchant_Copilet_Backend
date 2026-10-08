import { Module } from '@nestjs/common';
import { ShopifyController } from './shopify.controller.js';
import { ShopifyService } from './shopify.service.js';

@Module({
  controllers: [ShopifyController],
  providers: [ShopifyService]
})
export class ShopifyModule {}
