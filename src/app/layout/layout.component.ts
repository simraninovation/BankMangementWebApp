import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
isHeader:boolean
  constructor(private router:Router) { 
   
  }

  ngOnInit(): void {
  
   
  
  }
  abc(val:any)
  {
    console.log(val)
    this.isHeader=val
  }
 

}
