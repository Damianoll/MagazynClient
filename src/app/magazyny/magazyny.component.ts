import { DialogDeleteComponent } from './../dialog/dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClientService } from './../service/http-client.service';
import { Magazyn } from './../models/magazyn';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-magazyny',
  templateUrl: './magazyny.component.html',
  styleUrls: ['./magazyny.component.css']
})
export class MagazynyComponent implements OnInit {

  magazyny: Magazyn[];

  constructor(
    public httpClientService: HttpClientService,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.httpClientService.getMagazyny().subscribe(m => {
      this.magazyny = m;
      console.log(m);
    });
  }

  addMagazyn() {
    this.router.navigate(["/addMagazyn"]);
  }

  editMagazyn(id) {
    this.router.navigate(["/editMagazyn"], { queryParams: { idMagaz: id } });
  }

  deleteMagazyn(id) {
    let dialogRef = this.dialog.open(DialogDeleteComponent,
      {
        data: {
          title: "Usuń magazyn", tekst: "Czy napewno chcesz usunąć magazyn?",
          true: "Tak, usuń", false: "Nie usuwaj"
        }
      });
    dialogRef.afterClosed().subscribe(result => {
      if (result == "true") {
        this.httpClientService.deleteMagazyn(id).subscribe(m => {
          console.log(m);
        });
        this.magazyny = this.magazyny.filter(m => m.idMagazynu !== id);
      }
    });
  }
}
