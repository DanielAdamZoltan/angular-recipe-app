import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyRecipeAddComponent } from './easy-recipe-add.component';

describe('EasyRecipeAddComponent', () => {
  let component: EasyRecipeAddComponent;
  let fixture: ComponentFixture<EasyRecipeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyRecipeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyRecipeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
