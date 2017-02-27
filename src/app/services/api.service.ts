import { Injectable } from '@angular/core';
import {Hero} from '../model/hero';
import {Heroes} from '../_data/mock-heroes';

@Injectable()
export class ApiService {
  getList(): Promise<Hero[]> {
    return Promise.resolve(Heroes);
  }
}
