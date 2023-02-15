import { Injectable } from '@nestjs/common';
import { catRequest } from './dto/cat.request';

@Injectable()
export class CatsService {
  readAllCat() {
    return 'This action returns all cats';
  }

  readCat(id: number) {
    return 'This action returns a cat : ' + id;
  }

  createCat(body: catRequest) {
    return 'This action creates a cat' + body;
  }

  updateCat(id: string, body: catRequest) {
    return 'This action updates a cat' + id + body;
  }

  updatePartialCat(id: string, body: catRequest) {
    return 'This action updates a partial cat' + id + body;
  }

  deleteCat(id: string) {
    return 'This action deletes a cat' + id;
  }
}
