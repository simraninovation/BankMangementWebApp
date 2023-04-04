import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit,ViewChild  } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  matsidenavContainerRemove = false;
  matSidenavContainer = true;
  constructor(private observer: BreakpointObserver) { }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
          
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
          if(!this.sidenav.opened){
            this.matsidenavContainerRemove = true;
            this.matSidenavContainer = false;
          }
          
          
        }
      });
  }

}
