import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';


const LAZY_ROUTES: Routes = [
    { path: '', component: LazyComponent }
];

const lazyRouting = RouterModule.forChild(LAZY_ROUTES);

@NgModule({
  imports: [ lazyRouting ],
  exports: [ RouterModule ]
})
export class LazyRoutingModule {}
