import { Component, OnInit } from '@angular/core';
import { FormatService } from '../format.service';
import { Format } from '../format';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.css']
})
export class FormatComponent implements OnInit {

  constructor(private formatService: FormatService) { }
  formats: Format[];

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.formatService.getAll().subscribe(
      data => {
        this.formats = data
        console.log(data);
      }
    )
  }
  delete(format: Format) {

    const formatIndex = this.formats.findIndex(f => f.id === format.id);

    this.formats = this.formats.filter((g) => g.id != format.id)

    this.formatService.delete(format.id).subscribe(
      //TODO : aficher une erreur à l'écran
      () => { console.log("element supprimé") },

      err => this.formats.splice(formatIndex, 0, format) //TODO : aficher une erreur à l'écran
    )
  }


}
