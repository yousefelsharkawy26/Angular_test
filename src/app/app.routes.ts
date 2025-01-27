import { Routes } from '@angular/router';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  {path: 'add', component: AddHeroComponent },
  {path: 'list', component: ListComponent }
];
