import { MatDialog } from '@angular/material/dialog';
import { Magazyn } from './../models/magazyn';
import { HttpClientService } from './../service/http-client.service';
import { Component, OnInit } from '@angular/core';
import { Pracownik } from '../models/pracownik';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DialogCompleteComponent } from '../dialog/dialog-complete/dialog-complete.component';

@Component({
  selector: 'app-add-pracownik',
  templateUrl: './add-pracownik.component.html',
  styleUrls: ['./add-pracownik.component.css']
})
export class AddPracownikComponent implements OnInit {
  pipe = new DatePipe('en-US'); // Use your own locale
  magazyny: Magazyn[];
  data: Date;
  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private dialog: MatDialog ){ }

  pracownik: Pracownik = new Pracownik("", "", "", "", "0", "");
  magazynName: string = "";
  ngOnInit(): void {
    this.httpClientService.getMagazyny().subscribe(m => {
      this.magazyny = m;
    });

  }

  setIdMagazynu(magazynId, magazynNazwa){
    this.pracownik.magazynId = magazynId;
    this.magazynName = magazynNazwa;
  }

  createPracownik() {
    const now = Date.now();
    this.pracownik.dataZatrudnienia = this.pipe.transform(now, 'longDate');

    this.httpClientService.createPracownik(this.pracownik).subscribe( p => {
      console.log(p);
      this.dialog.open(DialogCompleteComponent, { data: { title: "Dodaj pracownika", tekst: "Pomyślnie dodano pracownika"} });
      this.router.navigate(["/"]);
    });

  }

  date(): string{
    this.data = new Date();
    return this.data.toLocaleString();
  }

}
