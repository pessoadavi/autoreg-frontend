import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReguladorComponent } from './home-regulador.component';

describe('HomeReguladorComponent', () => {
  let component: HomeReguladorComponent;
  let fixture: ComponentFixture<HomeReguladorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeReguladorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeReguladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
