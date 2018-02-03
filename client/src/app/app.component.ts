import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser/src/browser/title';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  ngOnInit(){
    $('button').click(function(){
      alert('Hi Truong');
    })
  }
}
