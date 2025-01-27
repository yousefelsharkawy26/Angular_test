import { error } from './../../../node_modules/ajv/lib/vocabularies/applicator/dependencies';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-hero',
  imports: [
    FormsModule
  ],
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css'
})
export class AddHeroComponent {
  hero = {
    name: '',
    power: 0,
    imageUrl: ''
  }

  constructor(public _service: SharedService) { }


  addHero() {
    // Add the hero to the list of heroes
    this._service.createNewHero(this.hero).subscribe(
      res => { next: console.log(res)},
      err => { error: console.log(err)}
      )
      this.hero = {
        name: '',
        power: 0,
        imageUrl: ''
      }
    }


}

