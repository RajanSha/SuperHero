import { Injectable } from '@angular/core';
import { Observable, of, empty } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

import { catchError, map, tap } from 'rxjs/operators';

import { Hero, Heroes } from './hero';

@Injectable({ providedIn: 'root' })
export class HeroService {

  API_KEY = '1380196642128490';
  response: any;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getHeroes(value: string): Observable<Heroes[]> {
    // TODO: send the message _after_ fetching the heroes
    //return this.http.get('http://localhost:8000/search');
    //if (value.length >2){
      return this.http.get<Heroes[]>('http://localhost:8000/search?name=' + value);
    //}else{
      //return empty();
    //}
    //return of(null);
    
  }

  getHero(id: number | string): Observable<Hero> {
    /*
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id))
    );
    */
    return this.http.get<Hero>('http://localhost:8000/id?id=' + id);
    
  }
/*
  getTry(): Observable<Hero[]> {

    return this.http.get<Hero[]>('http://localhost:8000/search');
  }  
  */  

}