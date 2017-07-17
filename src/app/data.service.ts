import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }
users = [
  'Admin',
  'Volunteer'
]
myData = () => 'this is my data';
}
