import { Component, OnInit } from '@angular/core';
import { PokemonCatalogueService } from './services/pokemon-catalogue.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NGPokemonTrainerApp';
  constructor(
    private readonly userService:UserService,
    private readonly pokemonCatalogue:PokemonCatalogueService
  ){

  }
  ngOnInit():void{
    if(this.userService.user){
      this.pokemonCatalogue.findAllPokemons();
    }
  }
}
