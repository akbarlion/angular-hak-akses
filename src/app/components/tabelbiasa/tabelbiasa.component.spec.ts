import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelbiasaComponent } from './tabelbiasa.component';

describe('TabelbiasaComponent', () => {
  let component: TabelbiasaComponent;
  let fixture: ComponentFixture<TabelbiasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelbiasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelbiasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
