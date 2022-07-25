import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { TrainerCollectedService } from 'src/app/services/trainer-collected.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  public isPokemonCollection: boolean = false;
  @Input() pokemonName:string = "";

  constructor(
    private readonly trainerCollected:TrainerCollectedService,
    private readonly userService:UserService) 
    { }


    //Loading on start, setting the pokemons in the trainers collection from the user
    ngOnInit(): void {
      this.isPokemonCollection = this.userService.inAddedPokemon(this.pokemonName)
    }

 
    //Adding pokemons from the catalogue to the trainer button.
  public onAddClicked():void{
    this.trainerCollected.addPokemonToTrainer(this.pokemonName)
    .subscribe({
      next:(user:User) =>{
          this.isPokemonCollection = this.userService.inAddedPokemon(this.pokemonName)
      },
      error:(error: HttpErrorResponse)=>{
        console.log("Error", error.message)
      }
    })
}

}
