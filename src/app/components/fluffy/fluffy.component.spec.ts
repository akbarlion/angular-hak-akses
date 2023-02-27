import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluffyComponent } from './fluffy.component';

describe('FluffyComponent', () => {
  let component: FluffyComponent;
  let fixture: ComponentFixture<FluffyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluffyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluffyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
