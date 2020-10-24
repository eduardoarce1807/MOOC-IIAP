import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-instructor-profile-public',
  templateUrl: './instructor-profile-public.component.html',
  styleUrls: ['./instructor-profile-public.component.css']
})
export class InstructorProfilePublicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#wrpr').addClass('wrapper _bg4586');
  }

}
