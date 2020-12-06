import { MatDialog } from '@angular/material/dialog';
import { HttpClientService } from './../service/http-client.service';
import { Magazyn } from './../models/magazyn';
import { Component, OnInit } from '@angular/core';
import { DialogCompleteComponent } from '../dialog/dialog-complete/dialog-complete.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-magazyn',
  templateUrl: './add-magazyn.component.html',
  styleUrls: ['./add-magazyn.component.css']
})
export class AddMagazynComponent implements OnInit {

  magazyn: Magazyn = new Magazyn("","","");
  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  createMagazyn(){
    this.httpClientService.createMagazyn(this.magazyn).subscribe( m => {
      console.log(m);
      let dialRef = this.dialog.open(DialogCompleteComponent, { data: { title: "Dodaj magazyn", tekst: "Pomyślnie dodano magazyn"} });
      this.router.navigate(["/magazyny"]);
    });
  }

}
