import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ignoreElements } from 'rxjs';
import { Pokemon } from '../classes/pokemon.class';
import { PokemonService } from '../services/pokemon.service';
import { GlobalFunctions } from '../utils/globalFunctions.class';


@Component({
  selector: 'app-pokemon-infos',
  templateUrl: './pokemon-infos.component.html',
  styleUrls: ['./pokemon-infos.component.sass']
})
export class PokemonInfosComponent implements OnInit {

  constructor(public pokemonService: PokemonService, private _activatedRoute: ActivatedRoute, public globalFunctions: GlobalFunctions){}

  ngOnInit() {
    this._activatedRoute.params.subscribe(parameter => {
      this.pokemonService.loadPokemonInfos(parameter['pokeName']);
      
    })
  }

  getPokemonImage(){
    const formatedNumber = this.globalFunctions.padWithLeadingZeros(this.pokemonService.pokemon.id, 3)

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatedNumber}.png` // HD
  }

}
