import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  new: Character = {
    name: '',
    power: 0
  };

  // get characters(): Character[] {
  //   return this.dbzService.characters
  // }

  // addNewCharacter(character: Character) {
  //   this.characters.push(character)
  // }

  constructor(private dbzService: DbzService) {
  }
  
  
}
