import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CanDeactivateMethod} from './can-deactivate-gaurds';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateMethod {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  edited = false;
  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   console.log(this.route.snapshot.queryParams, this.route.snapshot.fragment);
   this.route.queryParams.subscribe((qparams: Params) => {
     this.allowEdit = qparams['allowEdit'] === '1' ? true : false;
   });
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.edited = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
  if (!this.allowEdit) {
    return true;
  }
  if ((this.serverName !== this.server.name || this.serverStatus !==  this.serverStatus) && !this.edited) {
    return confirm('fffoooo');
  } else {
    return true;
  }
  }
}

