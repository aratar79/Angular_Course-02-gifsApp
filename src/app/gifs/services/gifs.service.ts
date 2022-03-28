import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'axrh4faauFouJqBtChAT9LJdyNYS45if';
  private UrlString: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];

  //TODO: Cambiar por otro tipo no any
  public result: Gif[] = [];

  get history() {

    return [...this._history];
  }

  constructor(private http: HttpClient) {

    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    // if (localStorage.getItem('history')) {
    //   this._history = JSON.parse(localStorage.getItem('history')!);
    // }
    this.result = JSON.parse(localStorage.getItem('results')!) || [];


  }

  gifsSearch(query: string = '') {

    console.log(`${this.UrlString}/search`);
    query = query.trim().toLocaleLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
      localStorage.setItem('results', JSON.stringify(this.result));
    }

    const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('q', query)
        .set('limit', '10');

    this.http.get<SearchGifsResponse>(`${this.UrlString}/search`, { params: params })
      .subscribe((resp) => {
        console.log(resp.data);
        this.result = resp.data;
        localStorage.setItem('results', JSON.stringify(this.result));
      });



  }
}

