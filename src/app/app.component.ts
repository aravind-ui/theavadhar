import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router) {}
  title = 'theavadhar';
  // scroll to top on new component view

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
  
      var scrollToTop = window.setInterval(function () {
          var pos = window.pageYOffset;
          if (pos > 0) {
              window.scrollTo(0, pos - 100); // how far to scroll on each step
          } else {
              window.clearInterval(scrollToTop);
          }
      }, 1); // how fast to scroll (this equals roughly 60 fps)
  });
  
  // scroll to top on new component view
  }

  
}
