import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenreComponent } from './genre/genre.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenreAddComponent } from './genre-add/genre-add.component';
import { FormatComponent } from './format/format.component';
import { FormatAddComponent } from './format-add/format-add.component';
import { FormatDetailComponent } from './format-detail/format-detail.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './authInterceptor';

 

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    GenreDetailComponent,
    GenreAddComponent,
    FormatComponent,
    FormatAddComponent,
    FormatDetailComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
