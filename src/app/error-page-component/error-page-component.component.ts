import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-error-page-component',
  templateUrl: './error-page-component.component.html',
  styleUrls: ['./error-page-component.component.css']
})
export class ErrorPageComponentComponent implements OnInit {
  error: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.error = this.route.snapshot.data['error'];
    this.route.data.subscribe((data: Data) => {
      this.error =  data['error'];
    });
  }

}
