import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon, PokemonResults } from 'src/models/pokemon.model';
const {apiPokemon} = environment

@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {
  private _pokemons: PokemonResults[] = [];
  private _error: string = "";
  private _loading:boolean = false
//Getters
  get pokemons():Pokemon[]{
    return this._pokemons;
  }
  get error(): string{
    return this._error;
  }
  get loading(): boolean{
    return this._loading
  }

  constructor(private readonly http:HttpClient) { }

//Find all pokemons function. Fetches pokemons from an API and pictures with the help of hardcode.
//Known bug is that the hardcode code does not work for the pokemons above around 800.
  public findAllPokemons() : void {

    if (this.pokemons.length >0 || this.loading) {
      return;
    }

    this._loading = true;
    this.http.get<Pokemon[]>(apiPokemon)
    .pipe(
       map((x: any) => x.results)
      )
      .subscribe({
        next: (pokemons: PokemonResults[]) => {
              this._pokemons = pokemons
              this._pokemons.map((pokemon, i) => {pokemon.id = i + 1; pokemon.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`})
              this._loading = false
        },
        error: (error:HttpErrorResponse) => {
            this._error = error.message;
        }
      
      })
    }

    //Find pokemon by name so its easier to check if its in the collection or not
    public findPokemonbyName(name:string): Pokemon | undefined{
      return this.pokemons.find((pokemon:Pokemon) => pokemon.name === name);
    }

}
