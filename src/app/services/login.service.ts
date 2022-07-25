import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user.model';

const {apiUsers, apiKey} = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(
    private readonly http:HttpClient
  ) { }

  //Login function. It will check if the username is in the api otherwise create a new user
  public login(username:string): Observable<User>{
    return this.checkUsername(username)
    .pipe(
      switchMap((user: User | undefined)=>{
        if (user === undefined) {
          return this.createUser(username);
        }
        return of(user);
      })
    )
  }
  //Checking for username in the api
  private checkUsername(username:string): Observable<User | undefined>{
    return this.http.get<User[]>(`${apiUsers}?username=${username}`)
    .pipe(
      map((response: User[]) => response.pop())
    )
  }
//Creating user with an empty pokemon array
  private createUser(username:string): Observable<User>{
    const user = {
      username,
      pokemon:[]
    };
    const headers = new HttpHeaders({
      "Content-Type":"application/json",
      "x-api-key": apiKey
    });
    return this.http.post<User>(apiUsers,user,{
      headers
    })
  }
 


  //if user -> store user

}
