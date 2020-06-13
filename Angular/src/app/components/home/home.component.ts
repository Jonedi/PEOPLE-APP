import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public page_title: string;

  constructor() {
    this.page_title = 'Bienvenido a la Plataforma';
  }

  ngOnInit() {
  }

}
