import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  private url = 'https://localhost:3000/';

  heros: any[] = [];

  createNewHero(hero: any) {
    return this.http.post(`${this.url}hero/ajout`, hero)
  }
}
