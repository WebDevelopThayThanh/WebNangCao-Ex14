import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Contact } from './contact/contact';
import { HomeWorkComponent } from './homeworkcomponent/homeworkcomponent';

import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropout-list-component/product-dropout-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';

import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';

import { CatalogComponent } from './catalog/catalog';

@NgModule({
  declarations: [
    App,
    Contact,
    HomeWorkComponent,
    BindingPropertyComponent,
    BindingClassComponent,
    BindingStyleComponent,
    BindingEventComponent,
    BindingTwoWayComponent,
    ProductListComponent,
    ProductDropdownListComponent,
    ProductListCallServiceComponent,
    ProductListCallHttpServiceComponent,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
    CatalogComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
