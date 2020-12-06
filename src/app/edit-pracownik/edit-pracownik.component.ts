import { DialogDeleteComponent } from './../dialog/dialog-delete/dialog-delete.component';
import { Magazyn } from './../models/magazyn';
import { HttpClientService } from './../service/http-client.service';
import { Pracownik } from './../models/pracownik';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbAlert, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-pracownik',
  templateUrl: './edit-pracownik.component.html',
  styleUrls: ['./edit-pracownik.component.css']
})
export class EditPracownikComponent implements OnInit {

  public pracownik: Pracownik = new Pracownik("", "", "", "", "", "");
  public magazyny: Magazyn[];
  public id: string;
  public magazynName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClientService: HttpClientService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['idPrac'];
      console.log(this.id);
    });
    this.httpClientService.getMagazyny().subscribe(m => {
      this.magazyny = m;
    });
    this.httpClientService.getPracownikById(this.id).subscribe(p => {
      console.log(p);
      this.pracownik.pracownikId = this.id;
      this.pracownik.imie = p.imie;
      this.pracownik.nazwisko = p.nazwisko;
      this.pracownik.dataZatrudnienia = p.dataZatrudnienia;
      this.pracownik.magazynId = p.magazynId;
      this.pracownik.stanowisko = p.stanowisko;
      this.magazynName = this.getMagazynName(p.magazynId);
      console.log(this.magazynName);
    });

  }

  getMagazynName(id) {
    var name;
    for (let magazyn of this.magazyny) {
      if (magazyn.idMagazynu === id) {
        name = magazyn.nazwa;
      }
    }
    console.log(name);
    return name;
  }

  editPracownik() {
    let dialogRef = this.dialog.open(DialogDeleteComponent,
      {
        data: {
          title: "Edytuj pracownika", tekst: "Czy napewno chcesz zapisać dane pracownika?",
          true: "Tak, zapisz", false: "Nie zapisuj"
        }
      });
    dialogRef.afterClosed().subscribe(result => {
      if (result == "true") {
        this.httpClientService.editPracownik(this.pracownik.pracownikId, this.pracownik).subscribe(p => {
          console.log(p);
          this.router.navigate(["/"]);
        });
      }
    });
  }
  setIdMagazynu(magazynId, magazynNazwa) {
    this.pracownik.magazynId = magazynId;
    console.log(magazynId);
    this.magazynName = magazynNazwa;
  }

}
