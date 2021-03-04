import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input()
  type: 'small' | 'medium'| 'large' | 'smallest' = 'medium';

  componentSettings = {
    smallest: {
      border: '3px solid #f3f3f3',
      border_top: '3px solid #ef4444',
      width: '15px',
      height: '15px'
    },

    small: {
      border: '5px solid #f3f3f3',
      border_top: '5px solid #ef4444',
      width: '40px',
      height: '40px'
    },
    medium: {
      border: '8px solid #f3f3f3',
      border_top: '8px solid #ef4444',
      width: '80px',
      height: '80px'
    },
    large: {
      border: '10px solid #f3f3f3',
      border_top: '10px solid #ef4444',
      width: '110px',
      height: '110px'
    },
  };

  constructor() { }

  ngOnInit(): void { }

}
