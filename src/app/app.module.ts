import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


@NgModule({
  declarations: [ 
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
