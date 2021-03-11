import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBenficairiesComponent } from './edit-benficairies.component';

describe('EditBenficairiesComponent', () => {
  let component: EditBenficairiesComponent;
  let fixture: ComponentFixture<EditBenficairiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBenficairiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBenficairiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
