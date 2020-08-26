import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Format } from './format';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  private url = "https://localhost:8000/format"

  constructor(private http: HttpClient) { }
  getAll(): Observable<Format[]>
  {
    return this.http.get<Format[]>(this.url);
  }
  get(id: number): Observable<Format>{
    return this.http.get<Format>(`${this.url}/${id}`);
  }
  create(format: Format): Observable<Format>{
    return this.http.post<Format>(this.url, format);
  }
  update(format: Format): Observable<Format>{
    return this.http.put<Format>(`${this.url}/${format.id}`, format);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }

}
