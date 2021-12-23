import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaCreateComponent } from './cozinha-create.component';

describe('CozinhaCreateComponent', () => {
  let component: CozinhaCreateComponent;
  let fixture: ComponentFixture<CozinhaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CozinhaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CozinhaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
