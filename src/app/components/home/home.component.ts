import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  owlCourses: OwlOptions = {
    items: 10,
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      },
      1200: {
        items: 5
      },
      1400: {
        items: 6
      }
    }
  }

  owlStudents: OwlOptions = {
    items: 10,
    loop: false,
    margin: 30,
    nav: true,
    dots: false,
    navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      },
      1200: {
        items: 3
      },
      1400: {
        items: 3
      }
    }
  }

}
