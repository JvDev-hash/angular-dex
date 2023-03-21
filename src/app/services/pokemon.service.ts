import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../classes/pokemon.class';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons = [];

  pokemon!: Pokemon;

  constructor(public httpClient: HttpClient) {
  }

  async loadPokemons() {
    const req = await this.httpClient
    .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
    .toPromise();

    this.pokemons = req.results;

  }

  async loadPokemonInfos(pokeName: string) {
    const req = await this.httpClient
    .get<any>(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .toPromise();

    this.pokemon = req;
    //return this.pokemon;
  }
}
