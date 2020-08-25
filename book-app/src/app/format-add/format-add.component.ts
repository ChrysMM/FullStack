import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormatService } from '../format.service';
import { Format } from '../format';



@Component({
  selector: 'app-format-add',
  templateUrl: './format-add.component.html',
  styleUrls: ['./format-add.component.css']
})
export class FormatAddComponent implements OnInit {

  constructor(private fb: FormBuilder, private fs: FormatService) { }

  createForm: FormGroup;

  ngOnInit(): void {
    this.createForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.maxLength(10)]],
      
        heigh: ['',[Validators.required]],
      
        width: ['',[Validators.required]],
      }
    )
  }
  get name() { 
    return this.createForm.get('name')

  }
  get heigh(){
    return this.createForm.get('heigh')
  }
  get width(){
    return this.createForm.get('width')
  }

  create(){
    const format: Format = this.createForm.value;
    this.fs.create(format).subscribe(
      response => console.log(response)
    );
  }
}
