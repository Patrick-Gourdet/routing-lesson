import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private log: AuthService) { }

  ngOnInit() {
  }
  load() {
    this.router.navigate((['/servers']));
  }
  logIn() {
    this.log.login();
  }
  logOut() {
    this.log.logout();
  }
}
