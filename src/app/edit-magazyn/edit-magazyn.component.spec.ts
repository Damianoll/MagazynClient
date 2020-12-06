import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMagazynComponent } from './edit-magazyn.component';

describe('EditMagazynComponent', () => {
  let component: EditMagazynComponent;
  let fixture: ComponentFixture<EditMagazynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMagazynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMagazynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
