import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from './../dialog/dialog-delete/dialog-delete.component';
import { HttpClientService } from './../service/http-client.service';
import { Magazyn } from './../models/magazyn';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-magazyn',
  templateUrl: './edit-magazyn.component.html',
  styleUrls: ['./edit-magazyn.component.css']
})
export class EditMagazynComponent implements OnInit {

  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  magazyn: Magazyn = new Magazyn("", "", "");
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.httpClientService.getMagazynById(params['idMagaz']).subscribe(m => {
        this.magazyn = m;
      });
    });

  }

  editMagazyn() {

    let dialogRef = this.dialog.open(DialogDeleteComponent,
      {
        data: {
          title: "Edytuj magazyn", tekst: "Czy napewno chcesz zapisać dane magazynu?",
          true: "Tak, zapisz", false: "Nie zapisuj"
        }
      });
    dialogRef.afterClosed().subscribe(result => {
      if (result == "true") {
        this.httpClientService.editMagazyn(this.magazyn.idMagazynu, this.magazyn).subscribe(m => {
          console.log(m);
          this.router.navigate(['/magazyny']);
        });
      }
    });
  }
}
