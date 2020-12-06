import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMagazynComponent } from './add-magazyn.component';

describe('AddMagazynComponent', () => {
  let component: AddMagazynComponent;
  let fixture: ComponentFixture<AddMagazynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMagazynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMagazynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
