import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  get history() {
    return this.gifsService.history;
  }

  buscar(arg: string){
    console.log(arg);
    this.gifsService.gifsSearch(arg);
  }
  ngOnInit(): void {
  }

}
