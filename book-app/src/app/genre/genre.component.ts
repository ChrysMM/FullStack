import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';
 

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor( private genreService: GenreService) { }

 genres;
 genre;

  ngOnInit(): void {
    this.getAll()
  }
 getAll(){
   this.genreService.getAll().subscribe(
     data => this.genres = data
   )
 }
 addGenre(name: string): void {
   
  
  this.genreService.createGenre({name: name}).subscribe( 
    genre => this.genres.push(genre)   
  );

 }
 deleteGenre(id:number): void {    
  this.genreService.deleteGenre(id).subscribe(
    () => this.genres = this.genres.filter(genreItem => genreItem.id !== id)
  );
}
delete(id: number){
  this.genreService.delete(id).subscribe(
    res => this.genres = this.genres.filter( (genre) => genre.id !=id),
    
  )
  
}
}
