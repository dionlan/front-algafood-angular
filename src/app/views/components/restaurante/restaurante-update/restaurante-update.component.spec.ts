import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteUpdateComponent } from './restaurante-update.component';

describe('RestauranteUpdateComponent', () => {
  let component: RestauranteUpdateComponent;
  let fixture: ComponentFixture<RestauranteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
