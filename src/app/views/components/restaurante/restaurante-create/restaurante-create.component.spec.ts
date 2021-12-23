import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteCreateComponent } from './restaurante-create.component';

describe('RestauranteCreateComponent', () => {
  let component: RestauranteCreateComponent;
  let fixture: ComponentFixture<RestauranteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
