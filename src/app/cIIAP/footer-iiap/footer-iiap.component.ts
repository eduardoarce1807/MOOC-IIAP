import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';

@Component({
  selector: 'app-footer-iiap',
  templateUrl: './footer-iiap.component.html',
  styleUrls: ['./footer-iiap.component.css']
})
export class FooterIiapComponent implements OnInit {

  constructor(CS:CargarScriptsService) {
    CS.CSSUser([
      "http://fonts.googleapis.com/css?family=Roboto:400,700,500",
      "assets/vendor/unicons-2.0.1/css/unicons.css",
      "assets/css/vertical-responsive-menu.min.css",
      "assets/css/style.css",
      "assets/css/responsive.css",
      "assets/css/night-mode.css",
      "assets/vendor/fontawesome-free/css/all.min.css",
      "assets/vendor/OwlCarousel/assets/owl.carousel.css",
      "assets/vendor/OwlCarousel/assets/owl.theme.default.min.css",
      "assets/vendor/bootstrap/css/bootstrap.min.css",
    ]);
    CS.CSSUser1([
      "assets/vendor/semantic/semantic.min.css"
    ]);
  }

  ngOnInit(): void {
  }

}
