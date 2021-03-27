import { PageNotFoundModule } from './components/page-not-found/page-not-found.module';
import { SharedModule } from './shared/shared.module';
import { GenericErrorHandler } from './shared/error/generic-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materia.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    PageNotFoundModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GenericErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
