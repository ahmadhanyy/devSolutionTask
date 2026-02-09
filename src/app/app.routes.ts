import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Dashboard } from './components/dashboard/dashboard';
import { NotFinishedPage } from './components/not-finished-page/not-finished-page'
import { OrderPage } from './components/order-page/order-page'

export const routes: Routes = [
  { path: '', component: MainLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'orders', component: OrderPage },
      { path: 'users', component: NotFinishedPage },
      { path: 'items', component: NotFinishedPage },
      { path: 'transactions', component: NotFinishedPage },
      { path: 'reports', component: NotFinishedPage },
      { path: 'messages', component: NotFinishedPage },
      { path: 'support', component: NotFinishedPage },
      { path: 'settings', component: NotFinishedPage },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
