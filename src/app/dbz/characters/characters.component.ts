import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {

    // @Input('data')
    // characters: Character[] = []
  get characters() {
    return this.dbzService.characters;
  }

  constructor(private dbzService: DbzService) {}
}
