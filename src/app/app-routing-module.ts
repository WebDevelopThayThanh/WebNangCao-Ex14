import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TOÀN BỘ IMPORT PHẢI NẰM Ở ĐÂY (TRÊN CÙNG):
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import {  ProductDropdownListComponent } from './product-dropout-list-component/product-dropout-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';

const routes: Routes = [
  { path: 'binding-property', component: BindingPropertyComponent },
  { path: 'class-binding', component: BindingClassComponent },
  { path: 'style-binding', component: BindingStyleComponent },
  { path: 'event-binding', component: BindingEventComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-dropdown-list', component: ProductDropdownListComponent },
  { path: 'product-dropdown-list-call-service', component: ProductListCallServiceComponent },
  { path: '', redirectTo: 'service-product-image-event', pathMatch: 'full' }, 
  { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }