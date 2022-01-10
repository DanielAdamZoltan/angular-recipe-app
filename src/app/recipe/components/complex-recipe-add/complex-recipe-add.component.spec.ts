import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexRecipeAddComponent } from './complex-recipe-add.component';

describe('ComplexRecipeAddComponent', () => {
  let component: ComplexRecipeAddComponent;
  let fixture: ComponentFixture<ComplexRecipeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexRecipeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexRecipeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
