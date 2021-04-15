import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { ProductsService } from './products.service';
import { Product } from './shemas/products.shema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): Promise<Product[]> {
    return this.productsService.getAll();
  }
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.getById(id);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createAny(@Body() CreateProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(CreateProductDto);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  deleteAny(@Param('id') id: string): Promise<Product> {
    return this.productsService.remove(id);
  }
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  updateAny(
    @Body() UpdateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): Promise<Product> {
    return this.productsService.update(id, UpdateProductDto);
  }
}
