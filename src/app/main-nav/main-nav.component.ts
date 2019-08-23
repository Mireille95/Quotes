import { Component, OnInit} from '@angular/core';
import {BreakpointObserver,Breakpoints,Breakpointstate } from '@angular/cdk/layout';
import{ Observable} from 'rxjs';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
 isHandset: Observable<Breakpointstate > = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver:BreakpointObserver) { }

  ngOnInit() {
  }

}
