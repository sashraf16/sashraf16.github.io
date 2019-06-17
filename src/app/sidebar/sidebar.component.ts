import { Component, OnInit, Output } from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  @Output() pageselect = new EventEmitter();
  page ='home';

  sendpage($event) {
    this.page = $event;
    this.pageselect.emit($event);
  }

  ngOnInit() {
  }

}
