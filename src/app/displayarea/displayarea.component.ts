import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayarea',
  templateUrl: './displayarea.component.html',
  styleUrls: ['./displayarea.component.css']
})
export class DisplayareaComponent implements OnInit {

  constructor() { }

  page:string;
  pageupdate($event)
  {
    this.page = $event;
  }

  ngOnInit() {
    this.pageupdate('home');
  }

}
