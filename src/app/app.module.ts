import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './pages/Login-content/login.content';
import {PokemonList} from './pages/Pokemon-list/pokemon-list-content';


import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonCatalogueComponent } from './components/pokemon-catalogue/pokemon-catalogue.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { TrainerPage } from './pages/Trainer/trainer.page';

//Routes for the differend pages aswell as authguard so you cant go to trainer/pokemon-list if not loged in
const routes:Routes =[
  {path:"", pathMatch:"full",redirectTo:"/login"},
  {path:'login', component:LoginComponent},
  {path:'pokemon-list', canActivate:[AuthGuard], component:PokemonList},
  {path:'trainer', canActivate:[AuthGuard], component:TrainerPage}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PokemonList,
    LoginFormComponent,
    NavbarComponent,
    PokemonCatalogueComponent,
    AddButtonComponent,
    TrainerPage

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
