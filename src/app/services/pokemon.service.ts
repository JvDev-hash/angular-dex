import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons = [];

  constructor(public httpClient: HttpClient) { 
    this.loadPokemons();
  }

  async loadPokemons() {
    const req = await this.httpClient
    .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
    .toPromise();

    this.pokemons = req.results;

  }
}
