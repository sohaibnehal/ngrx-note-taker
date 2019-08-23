import { Routes } from '@angular/router';

// containers
import * as fromContainers from './containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.NoteTakerComponent
  },
  { path: '**', redirectTo: '/' }
];
