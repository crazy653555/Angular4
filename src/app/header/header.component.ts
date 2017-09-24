import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  link = 'http://blog.miniasp.com/0000';
  title = 'test 123 ';

  ishighlight = true;

  constructor() { }

  ngOnInit() {
  }

  changeTitle($event) {
    // alert('wait');
    $event.stopPropagation();
    this.title = 'Hello';
    this.ishighlight = !this.ishighlight;
  }

  showAlert() {
    // alert('wait');
  }
}
