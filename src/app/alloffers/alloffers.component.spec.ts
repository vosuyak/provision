import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloffersComponent } from './alloffers.component';

describe('AlloffersComponent', () => {
  let component: AlloffersComponent;
  let fixture: ComponentFixture<AlloffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlloffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlloffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
