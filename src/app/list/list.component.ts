import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  imports: [ CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heros:any[] = [];

  constructor(public _service: SharedService) {
    this.heros = this._service.heros;
  }

}
