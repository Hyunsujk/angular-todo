import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss'],
})
export class InputButtonUnitComponent implements OnInit {
  title: string | null = '';

  constructor() {}

  ngOnInit(): void {}

  @Output() submit: EventEmitter<string> = new EventEmitter();

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
    this.title = null;
  }
}
