import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
}
getPokemon(){
    let bulbasar = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasar.subscribe(data => {console.log('pokemon:', data)

	})
    let pokemon = this._http.get('https://pokeapi.co/api/v2/ability/65/')
    pokemon.subscribe(data => {console.log('pokemon:', data.pokemon)
	})
   
}