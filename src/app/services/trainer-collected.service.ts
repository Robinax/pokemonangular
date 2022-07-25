import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from 'src/models/pokemon.model';
import { User } from 'src/models/user.model';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { UserService } from './user.service';

const {apiKey, apiUsers} =environment

@Injectable({
  providedIn: 'root'
})
export class TrainerCollectedService {

  private _loading: boolean = false;

  get loading(): boolean{
    return this._loading
  }

  constructor(
    private http:HttpClient,
    private readonly pokemonService:PokemonCatalogueService,
    private readonly userService:UserService
  ) { }
    //Adding the pokemon by name to trainer.
    public addPokemonToTrainer(pokemonName:string):Observable<User>{
      if (!this.userService.user) {
        throw new Error("There is no user logged in!")
      }
      const user: User = this.userService.user;

      const pokemon:Pokemon | undefined = this.pokemonService.findPokemonbyName(pokemonName)
      //Errors if the pokemon name should be wrong.
      if (!pokemon) {
        throw new Error("Ther is no pokemon with a namn like: " + pokemonName)
      }
      //adding the pokemon if its not in the addedpokemon and takes it away if it is
      if (this.userService.inAddedPokemon(pokemonName)) {
        this.userService.removeFromCollection(pokemonName)
      }else{
        this.userService.addToCollection(pokemon)
      }

      const headers = new HttpHeaders({
        'content-type':'application/json',
        'x-api-key':apiKey
      })
      //finding the users pokemons.
      this._loading = true;
      return this.http.patch<User>(`${apiUsers}/${user.id}`,{
      pokemon: [...user.pokemon]
       },{
        headers
       } )
       .pipe(
        tap((updatedUser:User)=>{
          this.userService.user = updatedUser;
        }),
        finalize(() =>{
          this._loading = false;
        })
       )
    }

}
