import { Component, Input, OnInit } from '@angular/core';
import { TrainerCollectedService } from 'src/app/services/trainer-collected.service';
import { Pokemon } from 'src/models/pokemon.model';


@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent  {
  pokemonTrainer:Pokemon[] = []
  @Input() pokemons:Pokemon[] = [];

 

  constructor(
    private readonly trainerCollected:TrainerCollectedService,
  ) { }
  //Loading for the html so it looks like its loading when fetching data.
  get loading():boolean{
    return this.trainerCollected.loading
  }




}
