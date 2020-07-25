import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss'],
})
export class InputButtonUnitComponent implements OnInit {
  title: string = 'Hello World';

  constructor() {
    this.title = 'I Love Angular';
  }

  ngOnInit(): void {
    this.title = 'Angular CLI Rules!';
  }
}
