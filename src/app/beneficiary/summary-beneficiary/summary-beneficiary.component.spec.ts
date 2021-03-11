import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBeneficiaryComponent } from './summary-beneficiary.component';

describe('SummaryBeneficiaryComponent', () => {
  let component: SummaryBeneficiaryComponent;
  let fixture: ComponentFixture<SummaryBeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryBeneficiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
