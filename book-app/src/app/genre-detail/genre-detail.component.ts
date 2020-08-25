import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { GenreService } from '../genre.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Genre } from '../genre';

@Component({
  selector: 'app-genre-detail',
  templateUrl: './genre-detail.component.html',
  styleUrls: ['./genre-detail.component.css']
})
export class GenreDetailComponent implements OnInit {
  id: number;


  constructor(private route: ActivatedRoute, private genreService: GenreService, private fb: FormBuilder) { }
  genre;
  formEdit: FormGroup;
  ngOnInit(): void {

    this.id = +this.route.snapshot.paramMap.get('id');
    this.genreService.getGenre(this.id).subscribe(
      data => {
        this.genre =data;
        this.initForm();
      }
    )
     

  }
  getGenre() {
    this.genreService.getGenre(this.id).subscribe((data) => this.genre = data);

  }
  initForm(): FormGroup{
  return this.fb.group(
    {
      name: [this.genre.name]
    }
  )
  }
  edit(): void{
    const genreUpdate:Genre = this.formEdit.value;
    genreUpdate.id = this.genre.id;
    this.genreService.update(this.formEdit.value).subscribe(data => {
      this.genre = data;
      this.toggleEdit();
    })
  }
  editing: boolean = false;
  toggleEdit(){
    //on inverse le mode d'edition
    this.editing = !this.editing; 
    if (this.editing){
      //on range un formGroup fraichement initialisé dans formEdit
      this.formEdit = this.initForm();
    } else {
      //a la desactivation du mode edition on supprime l'instance de formGroup de notre formulaire
      this.formEdit = null;
    }
  }

  save() {
    this.genreService.updateGenre(this.genre).subscribe((data) => console.log(data, "enregistré"));
  }

}