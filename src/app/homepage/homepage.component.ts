import { Component, OnInit } from '@angular/core';
// import { IImage } from './modules/slideshow/IImage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    imageUrls = [
      { url: 'assets/images/classification/theavadar-wedding.jpg', caption: 'wedding collection' },
      { url: 'assets/images/classification/theavadhar-kids.jpg', caption: 'kids collection' },
      { url: 'assets/images/classification/theavadhar_process_5.jpg', caption: 'men collection' },
    ];
    height: string = '500px';
    minHeight: string;
    arrowSize: string = '30px';
    showArrows: boolean = true;
    disableSwiping: boolean = false;
    autoPlay: boolean = true;
    autoPlayInterval: number = 3333;
    stopAutoPlayOnSlide: boolean = true;
    debug: boolean = false;
    backgroundSize: string = 'cover';
    backgroundPosition: string = 'center center';
    backgroundRepeat: string = 'no-repeat';
    showDots: boolean = true;
    dotColor: string = '#FFF';
    showCaptions: boolean = false;
    captionColor: string = '#FFF';
    captionBackground: string = 'rgba(0, 0, 0, .35)';
    lazyLoad: boolean = false;
    hideOnNoSlides: boolean = false;
    width: string = '100%';

    // gallery slider
    sliders = [
      {
        bg_image : 'theavadhar_product_1',
        head : 'hello',
        para : 'hi'
      },
      {
        bg_image : 'theavadhar_product_1',
        head : 'hello',
        para : 'hi'
      },
      {
        bg_image : 'theavadhar_product_1',
        head : 'hello',
        para : 'hi'
      },
    ]
    // gallery slider
}
