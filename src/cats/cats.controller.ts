import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { PositiveIntPipe } from 'src/pipe/positiveInt.pipe';
import { CatsService } from './cats.service';
import { catRequest } from './dto/cat.request';

@Controller('cats')
@UseInterceptors(new SuccessInterceptor())
export class CatsController {
  constructor(private readonly cartsService: CatsService) {}

  @Get()
  readAllCat() {
    //throw new HttpException('api broken', 401);
    return this.cartsService.readAllCat();
  }

  @Get(':id')
  readCat(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
    return this.cartsService.readCat(id);
  }

  @Post()
  createCat(@Body() body: catRequest) {
    return this.cartsService.createCat(body);
  }

  @Put(':id')
  updateCat(@Param('id') id: string, @Body() body: catRequest) {
    return this.cartsService.updateCat(id, body);
  }

  @Patch(':id')
  updatePartialCat(@Param('id') id: string, @Body() body: catRequest) {
    return this.cartsService.updatePartialCat(id, body);
  }

  @Delete(':id')
  deleteCat(@Param('id') id: string) {
    return this.cartsService.deleteCat(id);
  }
}
