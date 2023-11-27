import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
img ="assets/images/logoVenice.png"
  constructor(private sanitizer : DomSanitizer, private route:ActivatedRoute) { }

  ngOnInit(): void {
  //   const script = document.createElement('script')
  // this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/vendor/global/global.min.js')
  //  document.body.appendChild()
//   if(this.route.snapshot.paramMap.get('id')==""){
//   this.img="assets/images/l2.png"

//   }
//  if(this.route.snapshot.paramMap.get('id')=="WEH - Real Estate"){
//   this.img="assets/images/l4.png"
  
//   }

  }

}
