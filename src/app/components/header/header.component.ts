import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  myMethod(event: any): void {

    let headerxd = document.getElementById("xd");

    let switchxd = document.getElementById("customSwitches");

    if( !switchxd.hasAttribute("checked") ){
      headerxd.className = "night-mode";
      switchxd.setAttribute("checked","");
    }else{
      headerxd.className = "";
      switchxd.removeAttribute("checked");
    }

    
  }

}
