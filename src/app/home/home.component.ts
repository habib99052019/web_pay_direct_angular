import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
  //   const script = document.createElement('script')
  // this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/vendor/global/global.min.js')
  //  document.body.appendChild()
  }

}
