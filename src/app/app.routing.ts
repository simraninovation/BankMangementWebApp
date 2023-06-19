import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./service/auth-guard.service";

const ROUTES : Routes = [
    { path: '', redirectTo:'/auth/login', pathMatch:'full' },
    {path: 'app',loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule),canActivate:[AuthGuard]},
    
    //{ path:'app/home', loadChildren:() => import('./pages/home/home.module').then(m => m.HomeModule) },
    {path: 'auth',loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)}
];

export const Routing = RouterModule.forRoot(ROUTES) 