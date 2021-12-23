import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaDeleteComponent } from './cozinha-delete.component';

describe('CozinhaDeleteComponent', () => {
  let component: CozinhaDeleteComponent;
  let fixture: ComponentFixture<CozinhaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CozinhaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CozinhaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
