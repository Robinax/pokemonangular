# AngularPokemonTrainerApp

An application for pokemon trainers.
Display pokemons using api
add pokemon to your collection(almost as fun as catching them)

## Getting started

Open up git bash or visual studio code and write the following
```
git clone https://gitlab.com/Robinax/angularpokemontrainerapp.git
cd angularpokemontrainerapp
npm install
```
in the environments file you should add:
```
  apiKey:"(Key from the heroku database)",
  apiUsers:"(Heroku database)",
  apiPokemon: "https://pokeapi.co/api/v2/pokemon?limit=800&offset=0"
```
This should let you start the application
  # To Start The Application
ng serve

# Information about the Application

* The Login Page
* The Pokemon Catalouge Page 
* The Trainer Page

4. Login Page

The first thing a user should be able to see is the 'Login Page' where the user is required to enter a name for the trainer. The button for adding the name will be saved in LocalStorage. After doing that you will be redirected to the main page(Pokemon Catalouge Page). The user wont be able to get redirected to the main page without having any name stored in localStorage

5. Catalouge Page

Catalouge page may not be viewed if there is not a trainer name stored in localStorage. Use Guard to attain this functionality. The catalouge Page will list the pokemons name and image. There is a button for each pokemon that you can click on that will be displayed on Trainer Page. You also must show visually when a specific pokemon have been cliked on

6. Trainer Page

The trainer page contains all the pokemons you clicked on from (Pokemon Catalouge Page).There should be a button that delete specific pokemon that have been cliked on, that removes it from the Traine Page

# Contributor
@ahmedsulub
@RobinAx

# Developers
* Ahmed Ali  https://gitlab.com/ahmedabdiali
* Robin Axelstrom https://gitlab.com/Robinax


