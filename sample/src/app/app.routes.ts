import { Routes } from '@angular/router';
import { TodoComponent } from '../Components/todo.components';
import { WappComponent } from '..//Weatherapp/wapp.component';

export const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'weather', component: WappComponent },
  // { path: '', redirectTo: 'todo', pathMatch: 'full' },
];
