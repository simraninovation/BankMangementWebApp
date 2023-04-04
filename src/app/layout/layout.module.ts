import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout.component';
import { LayoutRouting } from './layout.routing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        NavigationComponent,

    ],
    imports: [
        LayoutRouting,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        CommonModule,
        // BrowserModule

    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class LayoutModule { }