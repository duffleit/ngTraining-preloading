import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomPreloadingStrategy } from './custom-preload-strategy';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule {}
