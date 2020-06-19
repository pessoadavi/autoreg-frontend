import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReguladorComponent } from './new-regulador.component';

describe('NewReguladorComponent', () => {
  let component: NewReguladorComponent;
  let fixture: ComponentFixture<NewReguladorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReguladorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReguladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
