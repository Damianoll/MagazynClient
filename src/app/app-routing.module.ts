import { EditMagazynComponent } from './edit-magazyn/edit-magazyn.component';
import { MagazynyComponent } from './magazyny/magazyny.component';
import { AddMagazynComponent } from './add-magazyn/add-magazyn.component';
import { EditPracownikComponent } from './edit-pracownik/edit-pracownik.component';
import { AddPracownikComponent } from './add-pracownik/add-pracownik.component';
import { PracownikComponent } from './pracownik/pracownik.component';
import { Pracownik } from './models/pracownik';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PracownikComponent },
  {path: 'addPracownik', component: AddPracownikComponent},
  {path: 'editPracownik', component: EditPracownikComponent},
  {path: 'addMagazyn', component: AddMagazynComponent},
  {path: 'magazyny', component: MagazynyComponent},
  {path: 'editMagazyn', component: EditMagazynComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
