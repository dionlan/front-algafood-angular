import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaUpdateComponent } from './cozinha-update.component';

describe('CozinhaUpdateComponent', () => {
  let component: CozinhaUpdateComponent;
  let fixture: ComponentFixture<CozinhaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CozinhaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CozinhaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
