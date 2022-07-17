import { Component, OnInit } from '@angular/core';
import { PrizeModel } from '../shared/models/prize.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public prizes: PrizeModel[] = [
    {
      title : 'First prize',
      image : './assets/images/M3F80.jpg',
      description : []
    },
    {
      title : 'Second prize',
      image : './assets/images/M3F80.jpg',
      description : []
    },
    {
      title : 'Third prize',
      image : './assets/images/M3F80.jpg',
      description : []
    },
    {
      title : 'Forth prize',
      image : './assets/images/M3F80.jpg',
      description : []
    },
    {
      title : 'Fifth prize',
      image : '',
      description : []
    },
    {
      title : 'Sixth prize',
      image : '',
      description : []
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
