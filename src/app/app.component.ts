import { Component, OnInit } from '@angular/core';

import { CargarScriptsService } from './services/cargar-scripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MOOC-IIAP';

  constructor() { }

  ngOnInit(): void{
    
  }

}
