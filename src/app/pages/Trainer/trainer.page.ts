import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Route, Router } from '@angular/router';
import { StorageKeys } from 'src/app/enums/storage-keys.enum';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';
import { UserService } from 'src/app/services/user.service';
import { Pokemon } from 'src/models/pokemon.model';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage  {
  pokemon: Pokemon[] = []
  
//Getters
    get user(): User | undefined{
        return this.userService.user
      }

      get username(): string | undefined{
        return this.userService.user?.username
      }

      get collection(): Pokemon[]{
        if (this.userService.user) {
          return this.userService.user.pokemon
        }
        return[]
      }

    constructor(
        private readonly userService:UserService,
        private router: Router,private route:ActivatedRoute
        ) {}

        //Logout function that will leet you know with an alert that you will now be loged out.
        //and removing the storagekeyuser from the session storage.
        public logout(){
          alert("You will now logout")
          sessionStorage.removeItem(StorageKeys.User)
          this.router.navigateByUrl("/login")
        }
}
