import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works by fei!';
  words:Array<String>=[
    '听说楼主很帅？',
    '是吗，没见过',
    '真的，哪天去看一下'
  ];
}
