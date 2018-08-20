import { Component, OnInit } from '@angular/core';
import { faHome, faEnvelopeSquare, faInbox, faBars, faSignInAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faHome = faHome;
  faEnvelopeSquare = faEnvelopeSquare;
  faInbox = faInbox;
  faBars = faBars;
  faSignInAlt = faSignInAlt;

  constructor() { }

  ngOnInit() {
  }

}
