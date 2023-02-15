import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelsortComponent } from './tabelsort.component';

describe('TabelsortComponent', () => {
  let component: TabelsortComponent;
  let fixture: ComponentFixture<TabelsortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelsortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
