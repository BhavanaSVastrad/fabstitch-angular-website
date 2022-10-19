

import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {
//   windowScrolled: boolean | undefined;
//   constructor(@Inject(DOCUMENT) private document: Document) {}
//   @HostListener("window:scroll", [])
//   onWindowScroll() {
//       if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
//           this.windowScrolled = true;
//       } 
//      else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
//           this.windowScrolled = false;
//       }
//   }
//   scrollToTop() {
//       (function smoothscroll() {
//           var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
//           if (currentScroll > 0) {
//               window.requestAnimationFrame(smoothscroll);
//               window.scrollTo(0, currentScroll - (currentScroll /8));
//           }
//       })();
//   }
    isShow: boolean = false;
topPosToStartShowing = 100;

@HostListener('window:scroll')
checkScroll() {
    
  // window의 scroll top
  // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  console.log('[scroll]', scrollPosition);
  
  if (scrollPosition >= this.topPosToStartShowing) {
    this.isShow = true;
  } else {
    this.isShow = false;
  }
}

// TODO: Cross browsing
gotoTop() {
  window.scroll({ 
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
  });
}
  ngOnInit() {}
}

