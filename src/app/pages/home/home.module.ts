import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";


const HOME_ROUTE = [
    { path:'/home',component: HomeComponent }
];

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports:[        
        RouterModule.forChild(HOME_ROUTE),
  
    ]
})


export class HomeModule{ }