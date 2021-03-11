import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBeneficairiesComponent } from './new-beneficairies.component';

describe('NewBeneficairiesComponent', () => {
  let component: NewBeneficairiesComponent;
  let fixture: ComponentFixture<NewBeneficairiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBeneficairiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBeneficairiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
