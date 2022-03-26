import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:   string = 'axrh4faauFouJqBtChAT9LJdyNYS45if';
  private _history: string[] = [];

  //TODO: Cambiar por otro tipo no any
  public result: Gif[] = [];

  get history() {
    
    return [...this._history];
  }

  constructor(private http: HttpClient) {}

  gifsSearch(query: string = '') {

    query = query.trim().toLocaleLowerCase();
    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history = this._history.splice(0,10);
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=axrh4faauFouJqBtChAT9LJdyNYS45if&q=${query}&limit=10`)
          .subscribe((resp) => {
            console.log(resp.data);
            this.result = resp.data;
          });

  }

}
