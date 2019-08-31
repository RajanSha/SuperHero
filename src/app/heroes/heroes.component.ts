import { Component, OnInit, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, tap, switchMap, finalize, map, skip } from 'rxjs/operators';

import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Heroes1, ErrorMsg } from '../hero';
import { HeroService } from '../hero.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
/*
export class HeroesComponent implements OnInit {

  public heroes = [];


  constructor(private heroService: HeroService) { }

  ngOnInit() {
       
    this.heroService.getTry()
    .subscribe((data) => this.heroes = data);
  }

  getHeroes() {
  }

}*/

export class HeroesComponent implements OnInit {
  heroes$: Observable<Heroes1[]>;
  selectedId: number;
  searchHeroCtrl = new FormControl();
  filteredHero: Heroes1[];
  isLoading = false;
  errorMsg = false;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
   this.searchHeroCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = false;
          this.filteredHero = [];
          this.isLoading = true;
        }),
        switchMap(value => 
          this.service.getHeroes(value)
    
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe(data => {
        if (data[0].response === "error") {
          this.errorMsg = true;
          this.filteredHero = [];
        } else {
          this.errorMsg = false;
          this.filteredHero = data[0].results;
        }
      console.log(data);
        console.log(this.errorMsg);
      });
/*
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getHeroes();
      })
    );
    */
  }

}