import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscComponent } from './asc.component';

describe('AscComponent', () => {
  let component: AscComponent;
  let fixture: ComponentFixture<AscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
