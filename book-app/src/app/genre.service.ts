import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre } from './genre'
import { Observable } from 'rxjs';
import { Format } from './format';
@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private url = "https://localhost:8000/genre"

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }
  getGenre(id: number) {
    return this.http.get(this.url + "/" + id)
  }
  createGenre(genre: object) {
    return this.http.post(this.url, genre)
  }
  deleteGenre(id: number) {
    return this.http.delete(this.url + "/" + id)

  }
  updateGenre(genre:any) {
    return this.http.put(this.url + "/" + genre.id , genre)

  }
  create(genre: Genre){
    return this.http.post(this.url, genre);
  }
  update(genre: Genre): Observable<Genre>{
    return this.http.put<Genre>(`${this.url}/${genre.id}`, genre);
  }
  delete(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  
}
