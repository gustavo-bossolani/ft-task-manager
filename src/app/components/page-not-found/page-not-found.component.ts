import { interval, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  counter = 0;

  private timer = 7000;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

}
