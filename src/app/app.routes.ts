import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { ListComponent } from '@products/pages/list/list.component';
import { NotFoundComponent } from './domains/general/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
