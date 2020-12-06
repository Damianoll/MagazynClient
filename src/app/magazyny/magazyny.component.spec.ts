import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazynyComponent } from './magazyny.component';

describe('MagazynyComponent', () => {
  let component: MagazynyComponent;
  let fixture: ComponentFixture<MagazynyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazynyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazynyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
