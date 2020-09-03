import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreComponent } from './genre/genre.component';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';
import { GenreAddComponent } from './genre-add/genre-add.component';
import { FormatComponent } from './format/format.component';
import { FormatAddComponent } from './format-add/format-add.component';
import { FormatDetailComponent } from './format-detail/format-detail.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: 'genre', component: GenreComponent},
  {path: 'detail/:id', component: GenreDetailComponent},
  {path: 'genre/add', component: GenreAddComponent},
  {path: 'format', component: FormatComponent},
  {path: 'format/add', component: FormatAddComponent},
  {path: 'format/:id', component: FormatDetailComponent},
  {path: 'login', component: AuthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
