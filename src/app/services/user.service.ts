import { Injectable } from '@angular/core';
import { Pokemon } from 'src/models/pokemon.model';
import { User } from 'src/models/user.model';
import { StorageKeys } from '../enums/storage-keys.enum';
import { StorageUtil } from '../utils/Storage.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user:User | undefined;

  public get user(): User | undefined {
    return this._user;
  }

  set user(user:User | undefined){
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  constructor() {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User)
   
   }
   //Checking what pokemons the user has
   public inAddedPokemon(PokemonName:string):boolean{

    if (this._user) {
      return Boolean(this.user?.pokemon.find((pokemon:Pokemon) => pokemon.name === PokemonName))
    }
    return false;
   }
   //function to add pokemon to collection
   public addToCollection(pokemon:Pokemon):void{
    if (this._user) {
      this._user.pokemon.push(pokemon)
    }
   }
   //function to remove pokemon from collection
   public removeFromCollection(pokemonName:string):void{
    if (this._user) {
      this._user.pokemon = this._user.pokemon.filter((pokemon:Pokemon)=> pokemon.name !== pokemonName)
    }
   }

}
