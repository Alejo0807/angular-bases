import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  @Input()
  new: Character = {
    name: '',
    power: 0
  };

  constructor(private dbzService: DbzService) {}

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  add() {
    if (this.new.name.trim().length === 0) return;
    this.dbzService.addNewCharacter(this.new);
    // this.onNewCharacter.emit(this.new);

    // this.characters.push(this.new);
    this.new = {
      name:'',
      power: 0
    }
  }

}
