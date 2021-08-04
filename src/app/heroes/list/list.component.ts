import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heroes: string[] = ['Batman', 'Spiderman','Superman'];
  heroDeleted: string  = '';

  
  deleteHero(): void {
    this.heroDeleted = this.heroes.pop() || '';
    
  }


}
