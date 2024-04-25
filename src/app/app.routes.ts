import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { OverviewComponent } from './overview/overview.component';
import { RestockComponent } from './restock/restock.component';

export const routes: Routes =  [{
    path: '',
    component:MenuComponent,
    children:[ { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to 'home' component when path is empty
    { path: 'home', component: HomeComponent },
    { path: 'withdraw', component: WithdrawComponent },
    { path: 'restock', component: RestockComponent },
    { path: 'overview', component: OverviewComponent }]
  }];
