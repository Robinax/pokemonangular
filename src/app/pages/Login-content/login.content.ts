import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'app-login-content',
    templateUrl:'./login-content.html',
    styleUrls:['./login-content.css']
})
export class LoginComponent {
    constructor(private readonly router:Router){

    }
    //When login works it directs you towards pokemon-list
    handleLogin():void{
        this.router.navigateByUrl("/pokemon-list")
    }

}