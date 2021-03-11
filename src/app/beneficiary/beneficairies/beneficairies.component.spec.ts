import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficairiesComponent } from './beneficairies.component';

describe('BeneficairiesComponent', () => {
  let component: BeneficairiesComponent;
  let fixture: ComponentFixture<BeneficairiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficairiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficairiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
