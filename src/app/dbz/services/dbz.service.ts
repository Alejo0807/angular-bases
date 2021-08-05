import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {

    private _characters: Character[] = [
        {
          name: 'Goku',
          power: 15000
        },
        {
          name: 'Vegeta',
          power: 13000
        }
    ];

    get characters(): Character[] {
        return [...this._characters];
    }

    addNewCharacter(character: Character) {
        this._characters.push(character)
    }

    constructor() {}
    
}




