import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  constructor(CS:CargarScriptsService) {
    CS.CSSUser1(["assets/css/jquery-steps.css"]);
  }

  ngOnInit(): void {
    $('#add-course-tab').steps({
		  onFinish: function () {
			alert('Wizard Completed');
		  }
		});
  }


}
