import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gifs-search',
  templateUrl: './gifs-search.component.html',
  styleUrls: ['./gifs-search.component.scss']
})
export class GifsSearchComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor); 
    this.txtBuscar.nativeElement.value = '';
  }

}
