import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const LAYOUT_ROUTES: Routes= [
    {
        path: '',component:LayoutComponent, children:[
            { path:'home', loadChildren:() => import('../pages/home/home.module').then(m => m.HomeModule) },
           // { path:'studentmanagement', loadChildren:() => import('../pages/student-management/student-management.module').then(m => m.StudentManagement) },
            { path:'accountManagement/accountDetails', loadChildren: () => import('../pages/account-management/account-management.module').then(m => m.AccountManagementModule)},
            { path:'balance', loadChildren: () => import('../pages/account-balance/account-balance.module').then(m => m.AccountBalanceModule)},
            { path:'transaction', loadChildren: () => import('../pages/transaction/transaction.module').then(m => m.TransactionModule)},
            { path:'transfer', loadChildren: () => import('../pages/transfer-fund/transfer-fund.module').then(m => m.TransferFundModule)},
            { path:'payeeDetails', loadChildren: () => import('../pages/payee-details/payee-details.module').then(m => m.PayeeDetailsModule)}    
        ]   
        
    }
]

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);