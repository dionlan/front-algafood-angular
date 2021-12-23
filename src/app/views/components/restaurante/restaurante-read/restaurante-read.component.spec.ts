import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteReadComponent } from './restaurante-read.component';

describe('RestauranteReadComponent', () => {
  let component: RestauranteReadComponent;
  let fixture: ComponentFixture<RestauranteReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
