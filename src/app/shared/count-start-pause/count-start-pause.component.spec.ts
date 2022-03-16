import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountStartPauseComponent } from './count-start-pause.component';

describe('CountStartPauseComponent', () => {
  let component: CountStartPauseComponent;
  let fixture: ComponentFixture<CountStartPauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountStartPauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountStartPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
