import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  array = [{ name: 'John', surname: 'Doe', age: 12 }];
  results = [];
  constructor() {}
  onClick() {
    this.results = this.array.filter((val) => val.age === 12);
  }
}
