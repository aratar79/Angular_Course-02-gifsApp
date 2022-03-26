import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-result',
  templateUrl: './gifs-result.component.html',
  styleUrls: ['./gifs-result.component.scss']
})
export class GifsResultComponent {

  get results() {
    return this.gifsService.result;
  }
  constructor(private gifsService: GifsService) { }

}
