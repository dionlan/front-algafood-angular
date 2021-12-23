import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaReadComponent } from './cozinha-read.component';

describe('CozinhaReadComponent', () => {
  let component: CozinhaReadComponent;
  let fixture: ComponentFixture<CozinhaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CozinhaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CozinhaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
