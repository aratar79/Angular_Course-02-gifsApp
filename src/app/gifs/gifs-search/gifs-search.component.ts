import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-search',
  templateUrl: './gifs-search.component.html',
  styleUrls: ['./gifs-search.component.scss']
})
export class GifsSearchComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  buscar() {
    
    const value = this.txtBuscar.nativeElement.value;
    
    if(value.trim().length === 0) return;

    this.gifsService.gifsSearch(value);
    this.txtBuscar.nativeElement.value = '';
  }
}
