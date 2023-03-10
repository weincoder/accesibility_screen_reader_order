import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleAComponent } from './example-a/example-a.component';
import { ExampleBComponent } from './example-b/example-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleAComponent,
    ExampleBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
