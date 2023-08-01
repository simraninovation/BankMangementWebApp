
import { AfterViewInit, Component, EventEmitter, OnInit,Output,ViewChild  } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  @Output() isHeader = new EventEmitter<Boolean>()
  //making my changes
  

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  matsidenavContainerRemove = false;
  matSidenavContainer = true;
  constructor(private router:Router) { }

  ngAfterViewInit() {
   
  }
  fun(url:any)
  {
    
    if(url)
    {
      this.isHeader.emit(true)
    }
    else{
      this.isHeader.emit(false)
    }
  }

}
