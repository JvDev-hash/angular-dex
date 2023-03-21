import { NumberSymbol } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GlobalFunctions } from '../utils/globalFunctions.class';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'] 
})
export class PokemonCardComponent {
  @Input()
  nome!: string;

  @Input()
  numero!: number;

  constructor(public globalFunctions: GlobalFunctions){}

  getPokemonImage(){
    const formatedNumber = this.globalFunctions.padWithLeadingZeros(this.numero, 3)

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatedNumber}.png` // HD
  }
}
