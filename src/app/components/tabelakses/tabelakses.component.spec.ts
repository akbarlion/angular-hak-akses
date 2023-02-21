import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaksesComponent } from './tabelakses.component';

describe('TabelaksesComponent', () => {
  let component: TabelaksesComponent;
  let fixture: ComponentFixture<TabelaksesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaksesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaksesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
