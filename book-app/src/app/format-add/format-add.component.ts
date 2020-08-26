import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormatService } from '../format.service';
import { Format } from '../format';
import { Router } from "@angular/router";


@Component({
  selector: 'app-format-add',
  templateUrl: './format-add.component.html',
  styleUrls: ['./format-add.component.css']
})
export class FormatAddComponent implements OnInit {

  constructor(private fb: FormBuilder, private fs: FormatService, private router: Router) { }

  createForm: FormGroup;

  ngOnInit(): void {
    this.createForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.maxLength(10)]],

        height: ['', [Validators.required]],

        width: ['', [Validators.required]],

        landscape: null,
      }
    )
  }
  get name() {
    return this.createForm.get('name')

  }
  get height() {
    return this.createForm.get('height')
  }
  get width() {
    return this.createForm.get('width')
  }
  get landscape() {
    return this.createForm.get('landscape')
  }

  create() {
    const format: Format = this.createForm.value;
    this.fs.create(format).subscribe(
      () => this.router.navigateByUrl("/format")
    );
  }
}
