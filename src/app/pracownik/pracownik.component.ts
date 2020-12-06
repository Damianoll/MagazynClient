import { DialogDeleteComponent } from './../dialog/dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Magazyn } from './../models/magazyn';
import { Pracownik } from './../models/pracownik';
import { HttpClientService } from './../service/http-client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pracownik',
  templateUrl: './pracownik.component.html',
  styleUrls: ['./pracownik.component.css']
})
export class PracownikComponent implements OnInit {

  pracownicy: Pracownik[];
  pracownicyOrg: Pracownik[];
  magazyny: Magazyn[];
  magazynName = "------------";

  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.httpClientService.getPracownicy().subscribe(p => {
      this.pracownicy = p;
      this.pracownicyOrg = p;
      console.log(p);
    });
    this.httpClientService.getMagazyny().subscribe(m => {
      this.magazyny = m;
      console.log(m);
    });
  }

  deletePracownik(id) {
    let dialogRef = this.dialog.open(DialogDeleteComponent,
      { data: { title: "Usuń pracownika", tekst: "Czy napewno chcesz usunąć pracownika?", true: "Tak, usuń", false: "Nie usuwaj" } });
    dialogRef.afterClosed().subscribe(result => {
      if (result == "true") {
        this.httpClientService.deletePracownik(id).subscribe(p => {
          this.pracownicy = this.pracownicy.filter(p => p.pracownikId !== id);
        });
      }
    });
  }

  editPracownik(id) {
    this.router.navigate(['/editPracownik'], { queryParams: { idPrac: id } });
  }

  addPracownik() {
    this.router.navigate(["/addPracownik"]);
  }

  getMagazynName(id) {
    var name;
    for (let magazyn of this.magazyny) {
      if (magazyn.idMagazynu === id) {
        name = magazyn.nazwa;
      }
    }
    return name;
  }

  filterMagazyn(idMagazynu, magazynName) {
    this.pracownicy = this.pracownicyOrg.filter(p => p.magazynId === idMagazynu);
    this.magazynName = magazynName;
  }

  showAllMagazyny() {
    this.pracownicy = this.pracownicyOrg;
    this.magazynName = "------------";
  }


}
