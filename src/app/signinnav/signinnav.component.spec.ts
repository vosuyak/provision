import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninnavComponent } from './signinnav.component';

describe('SigninnavComponent', () => {
  let component: SigninnavComponent;
  let fixture: ComponentFixture<SigninnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
