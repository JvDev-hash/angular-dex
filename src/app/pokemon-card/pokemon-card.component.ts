import { NumberSymbol } from '@angular/common';
import { Component, Input } from '@angular/core';

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

  getPokemonImage(){
    const formatedNumber = this.padWithLeadingZeros(this.numero, 3)

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatedNumber}.png` // HD
    //return `https://img.pokemondb.net/sprites/ruby-sapphire/normal/${this.nome}.png` // Sprites
  }

  padWithLeadingZeros(num: number, totalLength: number) {
    if(String(num).length >= totalLength) {
      return String(num);
    }
    return String(num).padStart(totalLength, '0');
  }

  capFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
