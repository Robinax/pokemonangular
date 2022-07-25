import { Component, OnInit } from "@angular/core";
import { PokemonCatalogueService } from "src/app/services/pokemon-catalogue.service";
import { Pokemon } from "src/models/pokemon.model";

@Component({
    selector:'app-pokemon-content',
    templateUrl:'./pokemon-list-content.html',
    styleUrls:['./pokemon-list-content.css']
})
export class PokemonList implements OnInit {
    //Getters for varius things
    get pokemons():Pokemon[]{
        return this.pokemonCatalogueService.pokemons;
    }
    get loading(): boolean {
        return this.pokemonCatalogueService.loading;
    }
    get error(): string{
        return this.pokemonCatalogueService.error;
    }

    constructor(
        private readonly pokemonCatalogueService:PokemonCatalogueService
    ){    }
        //loads the pokemon lists on start
    ngOnInit(): void {
        this.pokemonCatalogueService.findAllPokemons();
    }
}