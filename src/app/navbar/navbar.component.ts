import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      console.log('collapseNav in NavigationComponent clicking navbarToggler');
      this.navbarToggler.nativeElement.click();
    }
  }

  private navBarTogglerIsVisible() {
    const isVisible: boolean = this.navbarToggler.nativeElement.offsetParent !== null;
    return isVisible;
  }

}
