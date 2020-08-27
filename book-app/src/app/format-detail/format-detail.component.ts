import { Component, OnInit } from '@angular/core';
import { FormatService } from '../format.service';
import { ActivatedRoute } from '@angular/router';
import { Format } from '../format';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-format-detail',
  templateUrl: './format-detail.component.html',
  styleUrls: ['./format-detail.component.css']
})
export class FormatDetailComponent implements OnInit {

  constructor(private formatService: FormatService, private route: ActivatedRoute, private fb: FormBuilder) { }

  format: Format;
  formEdit: FormGroup;


  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.formatService.get(id).subscribe(
      data => {
        this.format = data;
      }
    )

  }
  initForm(): FormGroup {
    return this.fb.group(
      {
        name: [this.format.name],
        height: [this.format.height],
        widht: [this.format.width],
        landscape: [this.format.landscape]
      }
    )
  }
  edit(): void {
    const formatUpdate: Format = this.formEdit.value;
    formatUpdate.id = this.format.id;
    this.formatService.update(formatUpdate).subscribe(data => {

      this.format = data;

      this.toggleEdit();
    })
  }
  editMode: boolean = false;

  toggleEdit() {
    this.editMode = !this.editMode;
    if (this.editMode) {

      this.formEdit = this.initForm();
    } else {
      this.formEdit = null;
    }
  }

}